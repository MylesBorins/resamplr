require('./audio');

var george = require('./george');

var content = document.getElementById('content');

content.innerHTML = `${george()}`;
