'use strict';

const gigs = require('gigs');

const getLocation = require('./get-location');
const getTerm = require('./get-term');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'landingjobs';
const ADAPTER_SOURCE_URL = 'https://landing.jobs';

module.exports = function getGigs(jobs) {
  return jobs.map((job) => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL,
      title: job.title,
      description: job.role_description,
      url: job.url,
      location: getLocation(job),
      term: getTerm(job),
      remote: job.remote,
      published_at: getPublishedAt(job),
    });
  });
};