module.exports = function( http, settings, expressServer, iocCallback ) {
	http.createServer( expressServer ).listen( settings.externalHttpPort, function() {
		iocCallback( this );
	} );
};