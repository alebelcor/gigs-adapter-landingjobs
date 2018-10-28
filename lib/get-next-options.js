'use strict';

module.exports = function getNextOptions(options) {
  const nextOptions = Object.assign({}, options);

  nextOptions.gotOptions.query.offset += nextOptions.gotOptions.query.limit;

  return nextOptions;
};
