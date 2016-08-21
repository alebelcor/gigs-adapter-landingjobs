'use strict';

import test from 'ava';
import getlocation from '../lib/get-location';

test('it should return null when remote', t => {
  t.deepEqual(null, getlocation({remote: true}));
});

test('it should return at least the city', t => {
  t.deepEqual('foo', getlocation({city: 'foo'}));
});

test('it should return at least the country', t => {
  t.deepEqual('baz', getlocation({country_name: 'baz'}));
});

test('it should return at least the city and country', t => {
  t.deepEqual('ccc, ddd', getlocation({city: 'ccc', country_name: 'ddd'}));
});
