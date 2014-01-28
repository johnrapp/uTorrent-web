module.exports = function() {
	var pub = {};
	var getStatus = function( bitmask ) {
		return {
			started: !!( bitmask & 1 ),
			checking: !!( bitmask & 2 ),
			startAfterCheck: !!( bitmask & 4 ),
			checked: !!( bitmask & 8 ),
			error: !!( bitmask & 16 ),
			paused: !!( bitmask & 32 ),
			queued: !!( bitmask & 64 ),
			loaded: !!( bitmask & 128 ),
		};
	};
	pub.create = function( arr ) {
		return {
			hash: arr[ 0 ],
			status: getStatus( arr[ 1 ] ),
			name: arr[ 2 ],
			size: arr[ 3 ],
			percent: arr[ 4 ] / 10,
			downloaded: arr[ 5 ],
			uploaded: arr[ 6 ],
			ratio: arr[ 7 ],
			uploadSpeed: arr[ 8 ],
			downloadSpeed: arr[ 9 ],
			eta: arr[ 10 ],
			label: arr[ 11 ],
			peersConnected: arr[ 12 ],
			peersInSwarm: arr[ 13 ],
			seedsConnected: arr[ 14 ],
			seedsInSwarm: arr[ 15 ],
			availability: arr[ 16 ],
			torrentQueueOrder: arr[ 17 ],
			remaining: arr[ 18 ]
		};
	};
	return pub;
};
