'use strict';

import test from 'ava';

import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2016-08-20', getPublishedAt({published_at: '2016-08-20T10:12:10.514Z'}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
