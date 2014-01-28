module.exports = function( expressServer, uTorrentService ) {
	expressServer.get( '/list', function( req, res, next ) {
		uTorrentService.list( function( err, data ) {
			res.json( err ? 500 : 200, data );
		} );
	} );
};
