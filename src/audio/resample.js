// inspiration taken from
// https://github.com/notthetup/resampler/blob/gh-pages/lib/resampler.js
// Which is under and MIT license

var resampleRate = 8000;

function resample(buffer, next) {

  var frameCount = buffer.length * resampleRate / buffer.sampleRate;

  var offlineContext = new OfflineAudioContext(buffer.numberOfChannels, frameCount, resampleRate);
  var bufferSource = offlineContext.createBufferSource();
  bufferSource.buffer = buffer;
  bufferSource.connect(offlineContext.destination);
  bufferSource.start();
  offlineContext.startRendering().then(function (renderedBuffer) {
    next(null, renderedBuffer);
  }).catch(next);
}

module.exports = resample;
