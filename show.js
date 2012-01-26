var util = require('util'),
    url  = require('url'),
    fs  = require('fs'),
    querystring = require('querystring');

var notFound = function(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("no matching redirect code found for "+ 
        req.basicServer.host +"/"+ req.basicServer.urlparsed.pathname);
}

exports.handle = function(req, res) {
    util.log(util.inspect(req.basicServer));

    var pathname = url.parse(req.url).pathname;
    var queryname= url.parse(req.url).query;
    var rsFile ;

    console.log("pathname " + pathname);
    console.log("queryname " + queryname); 
    var sukchui  = querystring.parse(queryname)["food1"];

    console.log("sukchui: " + sukchui); 
    if ( sukchui == "punch1") rsFile = "/tmp/test1.png";
    else rsFile = "/tmp/test.png";

    fs.readFile(rsFile, "binary", function(error,file) {
       if( error ) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(error + "\n");
      res.end();
       } else {
      res.writeHead(200, {"Content-Type": "image/png"});
      res.write(file, "binary");
      res.end();

       }
    });

 //   notFound(req, res);
}

