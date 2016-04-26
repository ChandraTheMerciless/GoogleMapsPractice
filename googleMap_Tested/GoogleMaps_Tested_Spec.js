describe("gmap to exist", function(){
	it("should be defined globally", function(){
		expect(gmap).toBeDefined();
	});
	
	it("init should be defined within gmap", function(){
		expect(gmap.init).toBeDefined();
	});
	
	it("render should be defined within gmap", function(){
		expect(gmap.render).toBeDefined();
	});
	
	it("search should be defined in gmap", function(){
		expect(gmap.search).toBeDefined();
	});
	
	it("setMarker should be defined in gmap", function(){
		expect(gmap.setMarker).toBeDefined();
	});	
	
	it("init should set a default location", function(){
		// setup
		window.google = {};
		window.google.maps = {};
		window.google.maps.LatLng = function(a,b) { return {lat:a, lng: b}};
		// action
		gmap.init();
		// assert / expect		
		expect(gmap.location.lat).toBe(44.5403);
	});
	
	it("init should set default options object values", function(){
		// setup
		window.google = {};
		window.google.maps = {};
		window.google.maps.LatLng = function(a,b) { return {lat:a, lng: b}};
		//action
		gmap.init();
		//assert / expect
		expect(gmap.myOptions.zoom).toBe(17);
	});
	
	it("render should set map location and canvas", function(){
		// setup
		window.google = {};
		window.google.maps = {};
		window.google.maps.Map = function() {return {}};
		// action
		gmap.render("map-canvas");
		// assert / expect
		//ask Scott if this is enough of a test for jasmine
		expect(gmap.map).not.toBeNull();
	});
	
	it("search should accept value parameter and send it to geocoder", function(){
		// setup
		window.google = {};
		window.google.maps = {};
		window.google.maps.Geocoder = function() {return{}};
		window.google.maps.Marker = function() {return{}};
		var geocoder = jasmine.createSpyObj('geocoder', ['geocode']);
		geocoder.geocode(gmap.setMarker);
		
		var userValue = "Katmandu";
		window.google = {
			maps: {
				Geocoder: function() {
					this.geocode = function(value, fn) {
	//					setTimeout(function() {
	//						fn([{geometry: {location: 1}}], window.google.maps.GeocoderStatus.OK);
	//					}, 1000);
					}
				},
				GeocoderStatus: {
					OK: 1
				}
			}
		};
/*
		var div = document.createElement("div");
		div.id = "map";
		div.style.height = "200px";
		div.style.width = "300px";
		document.body.appendElement(div);
*/
		// action
		gmap.search("Columbus, Oh");
		//assert / expect
		expect(geocoder.geocode).toBeDefined();
	});
	
	
	it("setMarker should set global marker values", function(){
		// setup
		window.google = {};
		window.google.maps = {};
		////results[0].geometry.location
		var results = [{geometry: {location: 42}}];
		window.google.maps.Marker = function() {return{map: '', position: results}};
		
		//lol I can't believe this actually worked. Is it working as it should, though?
		window.gmap.map = {};
		window.gmap.map.setCenter = function() {return{}};
		// action
		gmap.setMarker(results, 'status');
		// expect
		
		expect(gmap.marker).not.toBeNull();
	});
	
});