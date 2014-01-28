module.exports = function( uTorrentApi, torrentFactory, settings ) {
	var pub = {};
	var call = function( action, parameters, callback ) {
		var client = new uTorrentApi( settings.uTorrent.host, settings.uTorrent.port );
		client.setCredentials( settings.uTorrent.user, settings.uTorrent.password );
		client.call( action, parameters, callback );
	};
	pub.list = function( callback ) {
		call( 'list', {}, function( err, data ) {
			callback( err, data ? data.torrents.map( torrentFactory.create ) : undefined );
		} );
	};
	pub.start = function( hash, callback ) {
		call( 'start', { hash: hash }, callback );
	};
	pub.stop = function( hash, callback ) {
		call( 'stop', { hash: hash }, callback );
	};
	pub.remove = function( hash, callback ) {
		call( 'remove', { hash: hash }, callback );
	};
	pub.add = function( uri, callback ) {
		call( 'add-url', { 's': uri }, callback );
	};
	return pub;
};
