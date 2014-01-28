angular.module('app', ['filters'])
.controller('torrentCtrl', ['$scope', '$http', 
	function($scope, $http) {
		var updateList = function() {
			$http.get('/list').
				success(function(data, status, headers, config) {
					$scope.torrents = data;
					console.log(data);
				}).
				error(function(data, status, headers, config) {
					alert('error');
					console.log(data);
				});
		};
		updateList();
		$scope.refresh = function() {
			updateList();
		};
		$scope.getStatus = function(torrent) {
			if(torrent.status.started) {
				if(torrent.percent < 100) return 'Downloading ' + torrent.percent + '%';
				else return 'Seeding'
			}
			else if(torrent.percent >= 100) return 'Finished';
			else if(torrent.status.paused) return 'Paused';
			else if(torrent.status.error) return 'Error!';
			else return 'Stopped';
		}
		$scope.start = function(hash) {
			$http.post('/start', {hash: hash})
				.success(function() {
					updateList();
				});
		};
		$scope.stop = function(hash) {
			$http.post('/stop', {hash: hash})
			.success(function() {
				updateList();
			});
		};
		$scope.remove = function(torrent) {
			$scope.torrents.splice($scope.torrents.indexOf(torrent), 1);
			$http.post('/remove', {hash: torrent.hash})
			.success(function() {
				updateList();
			});
		};
		$scope.add = function() {
			$http.post('/add', {uri: $scope.uri})
			.success(function() {
				updateList();
			});
			$scope.uri = '';
		}
	}]
);