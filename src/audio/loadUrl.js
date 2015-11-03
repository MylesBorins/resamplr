/* global context */

function loadUrl(url, next) {
  // From: http://www.html5rocks.com/en/tutorials/webaudio/intro/
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  
  request.onload = function() {
    context.decodeAudioData(request.response, function (buffer) {
      next(null, buffer);
    });
  };
  
  request.send();
}

module.exports = loadUrl;
