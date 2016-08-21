'use strict';

const moment = require('moment');

module.exports = function getPublishedAt(json) {
  let publishedAt = null;

  if (json.published_at) {
    publishedAt = moment.utc(json.published_at).format('YYYY-MM-DD');
  }

  return publishedAt;
};
