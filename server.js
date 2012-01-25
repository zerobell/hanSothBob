var port = 4080;
var server = require('./basicserver').createServer();

server.useFavIcon("172.16.120.30", "./docroot/favicon.png");
server.addContainer(".*", "/l/(.*)$", require('./redirector'), { });

//server.docroot("172.16.120.30", "/", "./docroot");
server.docroot("172.16.120.30", "/", "./jqtouch");


require('./httpsniffer').sniffOn(server);
server.listen(port);

