require('./context');

var async = require('async');
var loadUrl = require('./loadUrl');
var playBuffer = require('./playBuffer');

function original() {
  async.waterfall([
    loadUrl.bind(null, './audio/SeinfeldInHd-GeorgesAnsweringMachine-LongVersion.wav'),
    playBuffer
  ]);
}

module.exports = {
  original: original
};
