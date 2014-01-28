module.exports = function( expressServer, uTorrentService ) {
	expressServer
		.post( '/stop', function( req, res, next ) {
			uTorrentService.stop( req.body.hash, function( err ) {
				res.json( err ? 500 : 200 );
			} );
		} )
		.post( '/start', function( req, res, next ) {
			uTorrentService.start( req.body.hash, function( err ) {
				res.json( err ? 500 : 200 );
			} );
		} )
		.post( '/remove', function( req, res, next ) {
			uTorrentService.remove( req.body.hash, function( err ) {
				res.json( err ? 500 : 200 );
			} );
		} )
		.post( '/add', function( req, res, next ) {
			uTorrentService.add( req.body.uri, function( err ) {
				res.json( err ? 500 : 200 );
			} );
		} );
};
