'use strict';

var http = require('http');
var port = process.env.PORT || 4000;
var protocol = process.env.PROTOCOL || 'http';

http.createServer(handler).listen(port, listening);

function listening () {
  console.log('Server up on port %s.', port);
}

function handler (req, res) {
  redirect(res, 301, protocol + '://' + process.env.HOST + req.url);
}

function redirect (res, status, url) {
  res.writeHead(status, { Location: url });
  res.end();
}
