#!/usr/bin/env node
// ----------------------------------------------------------------------------
//
// serve-this.js <directory> <port>
//
// Using https://github.com/cloudhead/node-static
//
// ----------------------------------------------------------------------------

var static = require('node-static');

// get the one input arg (optional)
var serverRoot = process.argv[2] || './';
var serverPort = process.argv[3] || 8080;

console.log('Server Root  = ' + serverRoot);
console.log('Server Port  = ' + serverPort);

// make sure this directory exists
// ToDo!!!

//
// Create a node-static server instance to serve the './htdocs' folder
//
var staticServer = new static.Server(serverRoot, { cache : false, headers : { 'X-Powered-By' : 'serve-this.js' } });
var pause;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // Serve files!
        staticServer.serve(request, response, function(err, result) {
            if ( pause ) {
                clearTimeout(pause);
            }
            pause = setTimeout(function() {
                console.log('');
            }, 1000);

            // if this file is not found
            if (err && (err.status === 404)) { // If the file wasn't found
                log('404', request.url);
                staticServer.serveFile('/404.html', 404, {}, request, response);
                return;
            }

            // all good
            log('HIT', request.url);
        });
    });
}).listen(serverPort);

console.log('Listening On = http://localhost:' + serverPort + '/');

// ----------------------------------------------------------------------------

function log(msg, path) {
    console.log('' + (new Date()).toISOString() + ' - ' + msg + ' : ' + path);
}

// ----------------------------------------------------------------------------
