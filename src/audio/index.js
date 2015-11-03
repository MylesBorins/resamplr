require('./context');

var async = require('async');
var loadUrl = require('./loadUrl');
var playBuffer = require('./playBuffer');
var resample = require('./resample');

function original() {
  async.waterfall([
    loadUrl.bind(null, './audio/SeinfeldInHd-GeorgesAnsweringMachine-LongVersion.wav'),
    playBuffer
  ]);
}

function downsampled() {
  async.waterfall([
    loadUrl.bind(null, './audio/SeinfeldInHd-GeorgesAnsweringMachine-LongVersion.wav'),
    resample,
    playBuffer
  ]);
}

module.exports = {
  original: original,
  downsampled: downsampled
};
