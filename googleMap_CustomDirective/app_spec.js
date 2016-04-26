window.gmap = {};
window.gmap.init = function(){};
window.gmap.render = function(){};
window.gmap.search = function(){};

		
describe("Within the mapApp controller", function(){
	beforeEach(module ('mapApp'));
	var $controller, $scope;
	
//angular module mock stuff	
	beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
		$controller = _$controller_;
		$scope = $rootScope.$new();
	}));


	describe('$scope.startMap', function(){
		it('calls gmap.init function/spy', function(){
			var controller = $controller('UserInput', {$scope: $scope});			
			spyOn(gmap, 'init');
			$scope.startMap('map canvas dummy');
			expect(gmap.init).toHaveBeenCalled();
		});
	});

	describe('$scope.startMap', function(){
		it('calls gmap.render function/spy', function(){
			var controller = $controller('UserInput', {$scope: $scope});
			spyOn(gmap, 'render');
			$scope.startMap('mapCanvasDummy');
			expect(gmap.render).toHaveBeenCalledWith('mapCanvasDummy');
		});
	});

	describe('$scope.toGo', function(){
		it('loads starting map when page loads', function(){
			//geocoder setup
			var controller = $controller('UserInput', {$scope: $scope});
			spyOn(gmap, 'search');
			//action and expect
			$scope.goTo();
			expect(gmap.search).toHaveBeenCalledWith($scope.search);
		});
	});
});