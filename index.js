'use strict';

const defaultsDeep = require('lodash/defaultsDeep');

const getGotOptions = require('./lib/get-got-options');
const fetch = require('./lib/fetch');

const ADAPTER_ENDPOINT = 'https://landing.jobs/api/v1/offers';

module.exports = options => {
  options = defaultsDeep({}, options, {
    endpoint: ADAPTER_ENDPOINT,
    gotOptions: getGotOptions()
  });

  return fetch(options)
    .catch(console.error);
};
