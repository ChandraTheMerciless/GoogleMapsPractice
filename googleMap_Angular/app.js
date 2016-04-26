var mapApp = angular.module('mapApp', []);

mapApp.controller('UserInput',['$scope', function($scope){
		$scope.startMap = function(mapCanvas){
			gmap.init();
			gmap.render(mapCanvas);
		};
		$scope.goTo = function(){
			gmap.search($scope.search);
		};
	}]);
	
