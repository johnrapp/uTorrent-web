require( 'simple-ioc' )
	.setSettings( 'settings', require( './configuration/settings.json' ) )
	.multiRegisterSingletons( {
		'http': require( 'http' ),
		'express': require( 'express' ),
		'request': require( 'request' ),
		'uTorrentApi': require( 'utorrent-api' )
	} )
	.autoRegister( './app' )
	.start( function( settings ) {
		console.log( 'Application Started @', new Date(), 'on port:', settings.externalHttpPort );
	} );