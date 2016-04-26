var gmap = {
		
		//Are these variables in gmap even being affected?
		location: null,
		map: null,
		myOptions: null,

		init(){
			this.location = new google.maps.LatLng(44.5403, -78.5463);

			myOptions = {
			  zoom: 17,
			  center: this.location,
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		},
		
		render(){
			this.map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
		},
		
		search(value){
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': value}, function(results, status){
			   if (status == google.maps.GeocoderStatus.OK) {
				  gmap.map.setCenter(results[0].geometry.location);
				  var marker = new google.maps.Marker({map: gmap.map, position: results[0].geometry.location });
			   } else {
				  alert("Geocode was not successful for the following reason: " + status);
			   }
			});
		}
	}
		
	document.addEventListener("DOMContentLoaded", function() {
		gmap.init();
		gmap.render();
	});

	document.getElementById("sButton").addEventListener("click", function() {
		var userInput = document.getElementById("target").value;
		gmap.search(userInput);
	});