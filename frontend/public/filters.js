angular.module('filters', [])
.constant('byteSizes', [' B', ' KB', ' MB', ' GB', ' TB', ' PB'])
.filter('byte', ['byteSizes', 'numberFilter',
	function(sizes, numberFilter) {
		return function(input) {
			var iteration = 0;
			while(input > 1024) {
				++iteration;
				input /= 1024;
			}
			return numberFilter(input, 2) + sizes[iteration];
		}
	}]
)
.filter('bps', ['byteFilter',
	function(byteFilter) {
		return function(input) {
			return byteFilter(input) + '/s';
		}
	}]
)
.filter('hms', function() {
		return function(input) {
			var units = [
				{value: input % 60, name: 's'},
				{value: Math.round((input / 60) % 60), name: 'm'},
				{value: Math.floor(input / 3600), name: 'h'}
			];
			if(units[2].value) {units.splice(0,1)}
			else units.splice(2, 1);
			return units[1].value + units[1].name + ' ' + units[0].value + units[0].name;
		}
	}
)