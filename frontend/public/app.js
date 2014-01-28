angular.module('app', ['filters'])
.controller('torrentCtrl', ['$scope', '$http', 
	function($scope, $http) {
		var updateList = function() {
			$http.get('/list').
				success(function(data, status, headers, config) {
					$scope.torrents = data;
					console.log(data[0]);
				}).
				error(function(data, status, headers, config) {
					alert('Sorry, that did not work as expected');
				});
		};
		updateList();
		$scope.refresh = function() {
			updateList();
		};
		$scope.start = function(hash) {
			$http.post('/start', {hash: hash});
		};
		$scope.stop = function(hash) {
			$http.post('/stop', {hash: hash});
		};
	}]
);