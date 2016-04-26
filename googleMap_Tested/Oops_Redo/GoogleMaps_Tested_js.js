	var gmap = {
		
		//Are these variables in gmap even being affected?
		location: null,
		map: null,
		myOptions: null,
		marker : null,
		geocoder : null,
		
		init: function(){
			this.location = new google.maps.LatLng(44.5403, -78.5463);

			this.myOptions = {
			  zoom: 17,
			  center: this.location
			};
		},
		
		render: function(mapCanvas){
			this.map = new google.maps.Map(document.getElementById(mapCanvas), this.myOptions);
		},
		
		search: function(value){
			this.geocoder = new google.maps.Geocoder();
			this.geocoder.geocode( { 'address': value}, this.setMarker);
			},
		
		setMarker: function(results, status) {
			this.marker =  new google.maps.Marker({
				map: gmap.map,
				position: results[0].geometry.location
			});
		}
	}
	
	//document stuff below doesn't need to be tested, since I didn't write these
	document.addEventListener("DOMContentLoaded", function() {
		gmap.init();
		gmap.render("map-canvas");
	});

	document.getElementById("sButton").addEventListener("click", function() {
		var userInput = document.getElementById("target").value;
		gmap.search(userInput);
	});
	