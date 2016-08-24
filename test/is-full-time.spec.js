'use strict';

import test from 'ava';
import isFullTime from '../lib/is-full-time';

test('it should return true', t => {
  t.true(isFullTime({type: 'Full-time'}));
});

test('it should return false', t => {
  t.false(isFullTime({type: 'foo'}));
  t.false(isFullTime({}));
});
