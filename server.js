var port = 4081;
var host = "hansothbob.zerobell.cloud9ide.com";
var server = require('./basicserver').createServer();

server.useFavIcon(host, "./docroot/favicon.png");
server.addContainer(".*", "/l/(.*)$", require('./redirector'), { });

//server.docroot("172.16.120.30", "/", "./docroot");
server.docroot(host, "/", "./jqtouch");


require('./httpsniffer').sniffOn(server);
server.listen(port);

