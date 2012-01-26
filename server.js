var port = 4081;
var server = require('./basicserver').createServer();

server.useFavIcon("172.16.120.30", "./docroot/favicon.png");
server.addContainer(".*", "/show(.*)$", require('./show'), { });
server.addContainer(".*", "/l/(.*)$", require('./redirector'), { });

//server.docroot("172.16.120.30", "/", "./docroot");
//server.docroot("172.16.120.30", "/", "./jqtouch");
server.docroot("172.16.120.30", "/", "./html5");


require('./httpsniffer').sniffOn(server);
server.listen(port);

