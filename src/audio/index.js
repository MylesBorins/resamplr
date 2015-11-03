var async = require('async');

require('./context');
var loadUrl = require('./loadUrl');
var playBuffer = require('./playBuffer');
// Start off by initializing a new context.


function init(next) {
  var george = './audio/SeinfeldInHd-GeorgesAnsweringMachine-LongVersion.wav';
  next(null, george);
}

async.waterfall([
  init,
  loadUrl,
  playBuffer
]);
