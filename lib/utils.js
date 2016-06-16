'use strict';

/**
 * @module utils
 */

const fs     = require('fs'),
      path   = require('path'),
      glob   = require('glob'),
      logger = require('./logger').getLogger(global.TIPIT_LOG_LEVEL || 0);

/*
 * @private
 * @function
 *
 * Builds up a new error conintain all messages from [errors].
 *
 * @param {Array} errors - the errors detected during execution.
 * @returns {(Error|null)} the single error containing all other errors or null.
 */
function buildError(errors) {
  if (errors == null || errors.length === 0) return null;

  const message = errors.reduce((builder, error) => {
    const tag = Object.prototype.toString.call(error);
    if (tag === '[object Error]' || error instanceof Error || 'message' in error) {
      builder.push(error.message);
    } else if (tag === '[object String]' || typeof error === 'string') {
      builder.push(error);
    }

    return builder;
  }, []);

  if (message.length > 0) {
    return new Error('Multiple errors detected:\n' + message.join('\n'));
  }

  return null;
}

/*
 * @private
 * @function
 * @see utils.execute
 */
function execute(generator, callbacks = void 0) {
  const iterator = typeof generator === 'function'
                 ? generator()
                 : generator;

  function next(previous = null) {
    try {
      let result = iterator.next(previous);
      if (result.done) {
        if (result.value !== void 0) {
          callbacks.success(result.value);
        }
      } else {
        process.nextTick(yielded, result.value);
      }
    } catch(err) {
      if (callbacks) {
        callbacks.failure(err);
      } else {
        throw err;
      }
    }
  }

  function yielded(value) {
    if (value === void 0) {
      next(callbacks);
    } else if (Array.isArray(value)) {
      parallel(value);
    } else {
      execute(value, {
        success(result) {
          next(result);
        },
        failure(err) {
          iterator.throw(err);
        }
      })
    }
  }

  function parallel(array) {
    let errors  = [],
        results = [],
        pending = array.length;

    for (let [ i, iter ] of array.entries()) {
      execute(iter, {
        success(result) {
          results[i] = result;
          pending--;

          if (pending <= 0) {
            next({ errors, 'values': results });
          }
        },
        failure(err) {
          errors.push(err);

          pending--;

          if (pending <= 0) {
            next({ errors, 'values': results });
          }
        }
      })
    }
  }

  next();
}

/*
 * @private
 * @function
 * @see utils.flatten
 */
function flatten() {
  const args = Array.prototype.slice.call(arguments);

  return args.reduce((flat, array) => {
    return flat.concat(Array.isArray(array) ? flatten.apply(null, array) : array);
  }, []);
}

/*
 * @private
 * @function
 * @see utils.getFiles
 */
function getFiles(patterns, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options  = {};
  } else if (typeof callback !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }

  if (patterns == null || patterns.length === 0) {
    if (options['root'] != null) {
      logger.debug('current value of root is %s', options['root']);

      fs.access(options['root'], fs.F_OK, (err) => {
        options['root'] = err ? process.cwd() : options['root'];
        logger.debug('new value of root is %s', options['root']);

        getFiles([ options['root'] ], callback);
      });
      return;
    } else {
      options['root'] = process.cwd();
      logger.debug('no current value of root, switching to %s', options['root']);

      getFiles([ options['root'] ], callback);
      return;
    }
  }

  patterns = patterns.reduce((list, pattern) => {
    return list.concat(normalize(pattern, options['root'] || process.cwd()));
  }, []);

  const globOptions = {
    'dot'   : !!options['includeHidden'],
    'debug' : logger.isDebugEnabled(),
    'silent': true,
    'nodir' : true,
    'nocase': !!options['caseSensitive']
  };

  const executions = patterns.map((pattern) => {
    return function* () {
      const caller = yield;

      logger.debug('starting glob search with pattern %s', pattern);
      glob(pattern, globOptions, function(err, files) {
        if (err) {
          logger.warning('glob search failed with error %s', err.message || err);
          caller.failure(err);
          return;
        }

        logger.debug('glob search successfully completed\n\t\t%s', files.join('\n\t\t'));
        caller.success(files);
      });
    };
  });

  execute(function* () {
    const results = yield executions,
          files   = flatten(results.values),
          error   = buildError(flatten.apply(null, results.errors));

    logger.debug('found %s files in total:\n\t\t%s', files.length, files.join('\n\t\t'));
    callback(error, files);
  });
}

/*
 * @private
 * @function
 * @see utils.getHomePath
 */
function getHomePath() {
  return process.env.HOME || process.env.HOMEPATH || process.env.HOMEDIR || process.cwd();
}

/*
 * @private
 * @function
 * @see utils.normalize
 */
function normalize(paths, root) {
  logger.debug('normalizing path: "%s" with root "%s"', paths, root);

  return String.prototype.split.call(paths, ',')
               .map((pattern) => {
                 pattern = pattern.trim();

                 if (pattern) {
                   if (pattern.charCodeAt(0) === 46) {
                     pattern = path.resolve(root, pattern);
                   } else if (pattern.charCodeAt(0) === 126) {
                     pattern = path.resolve(getHomePath(), pattern.substring(1));
                   }
                 }

                 pattern = path.normalize(pattern);
                 logger.debug('normalized path is "%s"', pattern);

                 return pattern;
               });
}

module.exports = {
  /**
   * @static
   * @public
   * @function
   * @memberof utils
   * @since 1.0.0
   *
   * Executes a generator, allowing the developer to control the flow of promises.
   *
   * @param {Generator|Function} generator - the generator to be used to execute the promises.
   * @param {Function} [callbacks] - the callback to be used to report results or errors.
   */
  execute,

  /**
   * @static
   * @public
   * @function
   * @memberof utils
   * @since 1.0.0
   *
   * Flattens a set of arrays.
   * @returns {Array} an array containing all the values inside each one of the arrays in [arrays].
   */
  flatten,

  /**
   * @static
   * @public
   * @function
   * @memberof utils
   * @since 1.0.0
   *
   * Get all files contained in the current [patterns].
   *
   * @param {Array} patterns - the patterns where to extract the files.
   * @param {Object|Function} [options] - the options to be used.
   *                                      Can also represent [callback] if no root is provided.
   * @param {Function} [callback] - the callback function.
   */
  getFiles,

  /**
   * @statis
   * @public
   * @function
   * @memberof utils
   * @since 1.0.0
   *
   * Gets the home path for any OS.
   *
   * @returns {string} the home path of the current user.
   */
  getHomePath,

  /**
   * @static
   * @public
   * @function
   * @memberof utils
   * @since 1.0.0
   *
   * Normalizes [path]:
   * 1. First, the method will split any chained path (looking for ,).
   * 2. Second, the method will expand environment variables and user folders.
   *
   * @param {string} paths - the path to be expanded.
   * @param {string} root - the root to be used.
   * @returns {Array} an array of expanded paths.
   */
  normalize
};