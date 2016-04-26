//google had its main variable for map defined globally,
//so I'm copying that style for now
var gmap;

var Gmap = {
	
	center: "",
	size: "",
	defaultbounds: "",
	searchBox: "",

	//////////////methods below!///////////////////
 
	
	init: function(elementId){
		var location = new google.maps.LatLng(44.5403, -78.5463)
		var myOptions = {
		  zoom: 17,
		  center: location,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById(elementId), myOptions);
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title:"CodeGin LLC",
			draggable: true,
			animation: google.maps.Animation.DROP
		});
	},
	
		render: function(inputEntered){
			alert("Never gonna give you up");
			alert("Never gonna let you down");
			
			//Omg this wasn't working because I wasn't loading the places library
			//from Google, and I needed to do that for this to work!!!!



			

			var input = (document.getElementById(inputEntered));
			
			var searchBox = new google.maps.places.SearchBox((input));
			var markers = [];
			
			google.maps.event.addListener(searchBox, 'places_changed', function() {
				var places = searchBox.getPlaces();
							
				for (var i = 0, marker; marker = markers[i]; i++) {
				  marker.setMap(null);
				}
				
				//Since this is declared above, maybe I don't need it below?
				markers = [];
				var bounds = new google.maps.LatLngBounds();
				
				for (var i = 0, place; place = places[i]; i++) {
					var image = {
						url: place.icon,
						size: new google.maps.Size(71, 71),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(25, 25)
					};

					//Marker stuff is for marker to actually appear
					var marker = new google.maps.Marker({
						map: map,
						icon: image,
						title: place.name,
						position: place.geometry.location
					});

	//			markers.push(marker);
				//If statement below is muted, then I go to
				//the LatLng origiin 0,0 - the ocean
				bounds.extend(place.geometry.location);
				}
			
				map.fitBounds(bounds); //this fits to the bound
				map.setZoom(8); //this sets the zoom
			});

	}
}

	  //This will execute initialize function when page of loaded.
	  //Makes sure that the javascript doesn't crash web page.
//	google.maps.event.addDomListener(window, 'load', Gmap.init('map-canvas'));
