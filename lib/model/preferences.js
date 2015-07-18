'use strict';

function Preferences() {
  this.version = '1.0.0';
};

Preferences.create = function(opts) {
  opts = opts || {};

  var x = new Preferences();

  x.createdOn = Math.floor(Date.now() / 1000);
  x.walletId = opts.walletId;
  x.copayerId = opts.copayerId;
  x.email = opts.email;
  x.language = opts.language;
  x.unit = opts.unit;
  return x;
};

Preferences.fromObj = function(obj) {
  var x = new Preferences();

  x.createdOn = obj.createdOn;
  x.walletId = obj.walletId;
  x.copayerId = obj.copayerId;
  x.email = obj.email;
  x.language = obj.language;
  x.unit = obj.unit;
  return x;
};


module.exports = Preferences;
