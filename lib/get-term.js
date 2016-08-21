'use strict';

module.exports = function getTerm(json) {
  let term = null;

  if (json.type) {
    term = json.type.toLowerCase();
  }

  return term;
};
