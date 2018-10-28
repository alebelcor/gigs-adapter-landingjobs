'use strict';

import test from 'ava';
import getIsFullTime from '../lib/get-is-full-time';

test('it should return true', t => {
  t.true(getIsFullTime({type: 'Full-time'}));
});

test('it should return false', t => {
  t.false(getIsFullTime({type: 'foo'}));
  t.false(getIsFullTime({}));
});
