'use strict';

const gigs = require('gigs');

const getLocation = require('./get-location');
const getIsFullTime = require('./get-is-full-time');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'landingjobs';
const ADAPTER_SOURCE_URL = 'https://landing.jobs';

module.exports = jobs => {
  return jobs.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL, // eslint-disable-line camelcase
      title: job.title,
      description: job.role_description,
      url: job.url,
      location: getLocation(job),
      full_time: getIsFullTime(job), // eslint-disable-line camelcase
      remote: job.remote,
      published_at: getPublishedAt(job) // eslint-disable-line camelcase
    });
  });
};
