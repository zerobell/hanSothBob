var port = process.env.PORT;
var host = "hansothbob.zerobell.cloud9ide.com";
var server = require('./basicserver').createServer();

server.useFavIcon(host,, "./docroot/favicon.png");
server.addContainer(".*", "/show(.*)$", require('./show'), { });
server.addContainer(".*", "/l/(.*)$", require('./redirector'), { });

//server.docroot("172.16.120.30", "/", "./docroot");
//server.docroot("172.16.120.30", "/", "./jqtouch");
server.docroot(host, "/", "./html5");
//server.useFavIcon(host, "./docroot/favicon.png");
//server.addContainer(".*", "/l/(.*)$", require('./redirector'), { });

//server.docroot("172.16.120.30", "/", "./docroot");
//server.docroot(host, "/", "./jqtouch");


require('./httpsniffer').sniffOn(server);
server.listen(port);

