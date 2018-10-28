'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';

import getNextOptions from '../lib/get-next-options';

test('it should return a plain object', t => {
  t.true(isPlainObj(getNextOptions({gotOptions: {query: {limit: 50, offset: 0}}})));
});

test('it should return the options for the next page', t => {
  let options;

  options = getNextOptions({gotOptions: {query: {limit: 5, offset: 0}}});
  t.deepEqual(5, options.gotOptions.query.offset);

  options = getNextOptions({gotOptions: {query: {limit: 10, offset: 0}}});
  t.deepEqual(10, options.gotOptions.query.offset);

  options = getNextOptions({gotOptions: {query: {limit: 50, offset: 20}}});
  t.deepEqual(70, options.gotOptions.query.offset);
});
