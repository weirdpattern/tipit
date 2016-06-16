'use strict';

/**
 * @module logger
 */

const chalk = require('chalk');

/*
 * @private
 * @constant
 *
 * Valid logger levels.
 */
const OFF     = 0,
      INFO    = 1,
      DEBUG   = 2,
      WARNING = 3,
      ERROR   = 4,
      FATAL   = 5;

/*
 * Logger cache
 */
const cache = {};

/*
 * @private
 * @function
 *
 * Gets the caller method.
 * @param {Function} from - the function from where to start looking.
 * @returns {string} the name of the method that called the logger.
 */
function getCaller(from) {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;

  const recipient = {},
        handler   = Error.prepareStackTrace;

  Error['prepareStackTrace'] = (recipient, stack) => stack;
  Error['captureStackTrace'].call(null, recipient, from);

  var stacktrace = recipient.stack;
  Error.prepareStackTrace = handler;
  Error.stackTraceLimit = limit;

  return stacktrace[1].getMethodName() || stacktrace[1].getFunctionName() || '<anonymous>';
}

/*
 * @private
 * @function
 *
 * Gets the color to be used to log the message.
 * @param {int} type - the type of even being logged.
 * @returns {string} a colorized message
 */
function colorize(type, message) {
  switch(type) {
    case INFO:
      return chalk.gray(message);
    case DEBUG:
      return chalk.green(message);
    case WARNING:
      return chalk.yellow(message);
    case ERROR:
      return chalk.red(message);
    case FATAL:
      return chalk.red.bold(message);
    default:
      return chalk.white(message);
  }
}

/*
 * @private
 * @function
 *
 * Prefixes the message with one of the following:
 * INFO (%s):
 * DEBUG (%s):
 * WARNING (%s):
 * ERROR (%s):
 * FATAL (%s):
 *
 * where %s will be replaced with the name of the calling method.
 *
 * @param {int} type - the type of event being logged.
 * @param {string} message - the message to be prefixed.
 * @returns {string} the message with the new prefix.
 */
function prefix(type, message) {
  switch(type) {
    case INFO:
      return `   INFO (%s): ${message}`;
    case DEBUG:
      return `  DEBUG (%s): ${message}`;
    case WARNING:
      return `WARNING (%s): ${message}`;
    case ERROR:
      return `  ERROR (%s): ${message}`;
    case FATAL:
      return `  FATAL (%s): ${message}`;
    default:
      return `        (%s): ${message}`;
  }
}

/*
 * @private
 * @function
 *
 * Logs the message.
 *
 * @param {int} type - the type of event being logged.
 * @param {string} message - the message to be logged.
 */
function log(type, message, replacements) {
  if (!message) return;

  replacements.unshift(getCaller(log));
  console.log(
    colorize(type, prefix(type, message).replace(/%s/g, () => replacements.length > 0 ? replacements.shift() : ''))
  );
}

/*
 * @private
 * @function
 *
 * Determines if the given level is supported.
 *
 * @param {int} threshold - the current supported level.
 * @param {int} level - the level being asked.
 * @returns {Function} a function that will return a `true` when [level] is supported and `false` when is not.
 */
function isLevelEnabled(threshold, level) {
  return () => threshold > OFF && level > threshold;
}

/*
 * @private
 * @function
 *
 * Creates a new logger based on the level.
 *
 * @param {int} level - the level of the logger.
 * @returns {Logger} the new logger.
 */
function logger(level) {
  const caller = getCaller(logger);
  if (!cache.hasOwnProperty(caller)) {
    cache[caller] = {
      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Determines if info level is enabled.
       * @returns {boolean} `true` if info is supported; `false` otherwise.
       */
      isInfoEnabled: isLevelEnabled(INFO, level),

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Determines if debug level is enabled.
       * @returns {boolean} `true` if debug is supported; `false` otherwise.
       */
      isDebugEnabled: isLevelEnabled(DEBUG, level),

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Determines if warning level is enabled.
       * @returns {boolean} `true` if warning is supported; `false` otherwise.
       */
      isWarningEnabled: isLevelEnabled(WARNING, level),

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Determines if error level is enabled.
       * @returns {boolean} `true` if error is supported; `false` otherwise.
       */
      isErrorEnabled: isLevelEnabled(ERROR, level),

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Determines if fatal level is enabled.
       * @returns {boolean} `true` if fatal is supported; `false` otherwise.
       */
      isFatalEnabled: isLevelEnabled(FATAL, level),

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Logs an info message.
       * @param {string} message - the message to be logged.
       */
      info(message) {
        if (level > OFF) {
          log(INFO, message, Array.prototype.slice.call(arguments, 1));
        }
      },

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Logs a debug message.
       * @param {string} message - the message to be logged.
       */
      debug(message) {
        if (level > INFO) {
          log(DEBUG, message, Array.prototype.slice.call(arguments, 1));
        }
      },

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Logs a warning message.
       * @param {string} message - the message to be logged.
       */
      warning(message) {
        if (level > DEBUG) {
          log(WARNING, message, Array.prototype.slice.call(arguments, 1));
        }
      },

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Logs an error message.
       * @param {string} message - the message to be logged.
       */
      error(message) {
        if (level > WARNING) {
          log(ERROR, message, Array.prototype.slice.call(arguments, 1));
        }
      },

      /**
       * @public
       * @function
       * @memberof logger
       * @since 1.0.0
       *
       * Logs a fatal message.
       * @param {string} message - the message to be logged.
       */
      fatal(message) {
        if (level > ERROR) {
          log(FATAL, message, Array.prototype.slice.call(arguments, 1));
        }
      }
    };
  }

  return cache[caller];
}

module.exports = {
  /**
   * @public
   * @constant
   * @memberof logger
   * @since 1.0.0
   *
   * Logger is off.
   */
  OFF,

  /**
   * @public
   * @constant
   * @memberof logger
   * @since 1.0.0
   *
   * Logger supports info.
   */
  INFO,

  /**
   * @public
   * @constant
   * @memberof logger
   * @since 1.0.0
   *
   * Logger supports debug.
   */
  DEBUG,

  /**
   * @public
   * @constant
   * @memberof logger
   * @since 1.0.0
   *
   * Logger supports warning.
   */
  WARNING,

  /**
   * @public
   * @constant
   * @memberof logger
   * @since 1.0.0
   *
   * Logger supports error.
   */
  ERROR,

  /**
   * @public
   * @constant
   * @memberof logger
   * @since 1.0.0
   *
   * Logger supports fatal.
   */
  FATAL,

  /**
   * @public
   * @function
   * @memberof logger
   * @since 1.0.0
   *
   * Creates a new logger with [level] support.
   * @param {int} level - the level supported by the logger.
   * @return {Logger} a new logger with [level] support.
   */
  getLogger(level) {
    return logger(level);
  },

  /**
   * @public
   * @function
   * @memberof logger
   * @since 1.0.0
   *
   * Creates a new logger with info support.
   * @return {Logger} a new logger with info support.
   */
  getInfoLogger() {
    return logger(INFO);
  },

  /**
   * @public
   * @function
   * @memberof logger
   * @since 1.0.0
   *
   * Creates a new logger with debug support.
   * @return {Logger} a new logger with debug support.
   */
  getDebugLogger() {
    return logger(DEBUG);
  },

  /**
   * @public
   * @function
   * @memberof logger
   * @since 1.0.0
   *
   * Creates a new logger with warning support.
   * @return {Logger} a new logger with warning support.
   */
  getWarningLogger() {
    return logger(WARNING);
  },

  /**
   * @public
   * @function
   * @memberof logger
   * @since 1.0.0
   *
   * Creates a new logger with error support.
   * @return {Logger} a new logger with error support.
   */
  getErrorLogger() {
    return logger(ERROR);
  },

  /**
   * @public
   * @function
   * @memberof logger
   * @since 1.0.0
   *
   * Creates a new logger with fatal support.
   * @return {Logger} a new logger with fatal support.
   */
  getFatalLogger() {
    return logger(FATAL);
  }
};

/**
 * A object that represents a logger.
 * @typedef {Object} Logger
 * @property {void} info - logs an info message.
 * @property {void} debug - logs a debug message.
 * @property {void} warning - logs a warning message.
 * @property {void} error - logs an error message.
 * @property {void} fatal - logs a fatal message.
 */
