import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';

// this function is to be used as a callback to http.createServer method
// handles incoming requests and responses

function requestHandler( request, response ) {

   let requestedResource = path.join(
      __dirname,
      '../public',
      url.parse(request.url).pathname
   );

   fs.exists(requestedResource, function(exists) {

   })
}