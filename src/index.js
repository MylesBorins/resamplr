var audio = require('./audio');

var original = document.getElementById('original');
original.onclick = audio.original;

var downsampled = document.getElementById('downsampled');
downsampled.onclick = audio.downsampled;
