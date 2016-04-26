var mapApp = angular.module('mapApp', []);
var appStorage = angular.module('appStorage', ['angularLocalStorage']);

mapApp.controller('UserInput',['$scope', function($scope){
		$scope.startMap = function(mapCanvas){
			gmap.init();
			gmap.render(mapCanvas);
		};
		$scope.goTo = function(){
			gmap.search($scope.search);
		};
	}]);

appStorage.controller = ('UserStorage', function($scope,$localStorage){
	
});

//custom directives should usually be in different file, but I'll keep them here for now

/*Had trouble getting custom directive for map canvas to work, so ignoring for now
mapApp.directive('gmapCanvas', function(){
	return{
		templateUrl: 'googleMap_css.css'
	};
});
*/

mapApp.directive('gmapSearchBox', function(){
	return{
		templateUrl: 'googleMap_search.html'
	};
});
