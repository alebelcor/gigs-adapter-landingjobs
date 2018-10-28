'use strict';

module.exports = function getLocation(json) {
  let location = null;

  if (json.remote) {
    return location;
  }

  if (json.city) {
    location = json.city;
  }

  if (json.country_name) {
    location = location ? `${location}, ${json.country_name}` : json.country_name;
  }

  return location;
};
