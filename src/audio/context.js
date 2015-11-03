// window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
var context = window.context = new (window.AudioContext || window.webkitAudioContext)();
module.exports = context;
