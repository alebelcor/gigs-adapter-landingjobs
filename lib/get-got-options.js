'use strict';

const pkg = require('../package.json');

module.exports = () => {
  return {
    json: true,
    headers: {
      'user-agent': pkg.repository.url
    },
    query: {
      limit: 50,
      offset: 0
    }
  };
};
