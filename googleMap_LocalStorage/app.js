var mapApp = angular.module('mapApp', []);

mapApp.controller('UserInput',['$scope', function($scope){
		
		$scope.startMap = function(mapCanvas){
			gmap.init();
			gmap.render(mapCanvas);
		};
		$scope.goTo = function(){
			gmap.search($scope.search);
			$scope.addSearchHistory();
		};

		//These three lines are setup for localStorage - they run immediately, and make localStorage and searchHistory
		//identical - tho localStorage is always a string for security reasons. searchHistory is an object
		$scope.searchedTemp = localStorage.getItem('searchesKey');
		$scope.searchHistory = (localStorage.getItem('searchesKey')!==null) ? JSON.parse($scope.searchedTemp) : [];
		
		localStorage.setItem('searchesKey', angular.toJson($scope.searchHistory));

		
		$scope.linkClick = function(searches){
			$scope.search = searches;
			$scope.goTo();
		};
		
		$scope.clearLocal = function() {
			localStorage.removeItem('searchesKey');
			$scope.searchHistory = [];
			$scope.search = '';
		};
		

		//This function will 'push' a new object to the array in $scope.searchHistory
		//This is the important varialbe that moves between localStorage and object (searchHistory)
		$scope.addSearchHistory = function(){
			$scope.searchHistory.push({
				//in a tags, use this below
				name: $scope.search
			});
			console.log($scope.searchHistory);
			console.log(typeof $scope.searchHistory)
			localStorage.setItem('searchesKey', angular.toJson($scope.searchHistory));
		};
}]);

mapApp.directive('gmapSearchBox', function(){
	return{
		templateUrl: 'googleMap_search.html'
	};
});
