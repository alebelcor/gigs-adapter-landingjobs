'use strict';

import test from 'ava';
import getTerm from '../lib/get-term';

test('it should return null', t => {
  t.deepEqual(null, getTerm({type: ''}));
  t.deepEqual(null, getTerm({}));
});

test('it should return the term', t => {
  t.deepEqual('full-time', getTerm({type: 'Full-Time'}));
});
