//google had its main variable for map defined globally,
//so I'm copying that style for now
var gmap;



var Gmap = {
	
	center: "",
	size: "",
	defaultbounds: "",
	searchBox: "",

	//////////////methods below!
	render: function(inputEntered){
//		alert("Never gonna give you up!");
//		alert("Never gonna let you down!");
		

		
	},

	//With 	Edita's help, I --or she, to be fair-- got the stuff
	//below to work!! I'm going to try to call my marker to this init function from
	//another function so this one doesn't become a huge mess
	//NOTE - the elementId refers to the map-canvas - div section
	//with height and width designated as space for map to appear in - 
	//and lets it be passed in a more dynamic way
	init: function(elementId){
		var element = document.getElementById(elementId);	

		var mapOptions = {
			zoom: 15,
			center: new google.maps.LatLng(44.5403, -78.5463)
		};
		gmap = new google.maps.Map(element, mapOptions);

		//Just sticking the code for the marker in here for now, tho I
		//might see if I can call it from a separate function later on
		var point = new google.maps.LatLng(44.5403, -78.5463);
		var marker = new google.maps.Marker({
			position: point,
			map: gmap,
			draggable: true,
			animation: google.maps.Animation.DROP
		});
	}
}
/*	
	bounds: function(){
		var defaultBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(44.5403, -78.5463)
		);
		return defaultBounds;
	},


*/

/*


//The parameters here are standard and come straight from
//google's documentation as a way to convert MarkerImage to an Icon.
//This draws from google's predefined objects.
var image = {
	url: place.icon,
	size: new google.maps.Size(71, 71),
	origin: new google.maps.Point(0, 0),
	anchor: new google.maps.Point(17, 34),
	scaledSize: new google.maps.Size(25, 25)
}

//google's documentation says the first two fields are important
var marker = {
	//for LatLng
	position: place.geometry.location,
	gmap: gmap,
	icon: "",
	draggable: true,
	//sticking the gmap in since it seems important?
	
	
	
}

var latLngBoundaries = {
}







/*

	function initialize() {
		var mapCanvas = document.getElementById('gmap-canvas');	
		
		var gmap = new google.maps.gmap(mapCanvas, {zoom: 7,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		
	
		var point = new google.maps.LatLng(44.5403, -78.5463);
		var defaultBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(44.5403, -78.5463),
			new google.maps.LatLng(44.5403, -78.5463));
		gmap.fitBounds(defaultBounds);

			var marker = new google.maps.Marker({
			position: point,
			gmap: gmap,
			draggable: true,
			animation: google.maps.Animation.DROP,
			title: 'Hello, Friend!'
		})
	
		//Displays text above marker
		var infowindow = new google.maps.InfoWindow({
			content:"Hello, Friend!"
			});
		infowindow.open(gmap,marker);
	
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(gmap,marker);
		});

		//input to use for button click?
		var input = (document.getElementById('target'));
		//This talks to the input tag below.
		var searchBox = new google.maps.places.SearchBox(input);	
		var markers = [];

		//place change event via search box
		google.maps.event.addListener(searchBox, 'places_changed', function() {
			//console.log(searchBox.getPlaces());
			var places = searchBox.getPlaces();
						
			for (var i = 0, marker; marker = markers[i]; i++) {
			  marker.setMap(null);
			}
			
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

				var marker = new google.maps.Marker({
					gmap: gmap,
					icon: image,
					title: place.name,
					position: place.geometry.location
				});

			markers.push(marker);
			bounds.extend(place.geometry.location);
			}
		
			gmap.fitBounds(bounds); //this fits to the bound
			gmap.setZoom(8); //this sets the zoom
		});
		
		google.maps.event.addListener(gmap, 'bounds_changed', function() {
			var bounds = gmap.getBounds();
			searchBox.setBounds(bounds);
		});
	
		var button = document.getElementById('sButton');
		button.onclick = function() {
			var places = searchBox.getPlaces();
			input.value='Where you you like to go?';
			input.focus(); 
		}
		
		google.maps.event.addListener(marker,'click',function() {
			gmap.setZoom(8);
			gmap.setCenter(marker.getPosition());
		});
	}
		
	  
	  //This will execute initialize function when page of loaded.
	  //Makes sure that the javascript doesn't crash web page.
	google.maps.event.addDomListener(window, 'load', Gmap.init('map-canvas'));
*/