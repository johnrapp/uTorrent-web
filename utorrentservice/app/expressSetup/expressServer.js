module.exports = function( express, iocCallback ) {
	express().configure( function() {
		this
			.use( express.compress() )
			.use( express.json() )
			.use( express.urlencoded() )
			.use( function( req, res, next ) {
				res.set( 'Connection', 'close' );
				next();
			} );
		iocCallback( this );
	} );
};