'use strict';

const path  = require('path'),
      utils = require('./utils');

const formats = {
  'html': 1,
  'json': 2,
  'xml': 4,
  'markdown': 8,
  'plain': 16
};

function enumerate(html, json, xml, markdown, plain) {
  let enumerator = 0;

  enumerator |= html     ? formats.html     : 0;
  enumerator |= json     ? formats.json     : 0;
  enumerator |= xml      ? formats.xml      : 0;
  enumerator |= markdown ? formats.markdown : 0;
  enumerator |= plain    ? formats.plain    : 0;

  return enumerator;
}

function getOptions(context) {
  return {
    'root': context.root,
    'logLevel': context.log || 0,
    'includeHidden': context.includeHidden,
    'caseSensitive': context.caseSensitive,
    'formats': enumerate(context.html, context.json, context.xml, context.markdown, context.plain)
  };
}

module.exports = function(paths, context) {
  const options = getOptions(context);

  utils.getFiles(paths, options, (err, files) => {
    files = files.filter((file) => path.extname(file) === '.tip');

    process.exit(0);
  });
};