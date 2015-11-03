/* global context */

function playBuffer(buffer/*, next*/) {
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}

module.exports = playBuffer;
