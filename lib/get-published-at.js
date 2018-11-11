'use strict';

const moment = require('moment');

module.exports = json => {
  let publishedAt = null;

  if (json.published_at) {
    publishedAt = moment.utc(json.published_at, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true).format('YYYY-MM-DD');
  }

  return publishedAt;
};
