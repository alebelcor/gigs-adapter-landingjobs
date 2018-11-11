'use strict';

module.exports = options => {
  const nextOptions = {...options};

  nextOptions.gotOptions.query.offset += nextOptions.gotOptions.query.limit;

  return nextOptions;
};
