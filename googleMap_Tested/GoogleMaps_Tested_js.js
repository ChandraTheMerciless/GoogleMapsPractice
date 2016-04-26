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
		
		search:function(value){
			this.geocoder = new google.maps.Geocoder();
			this.geocoder.geocode( { 'address': value}, this.setMarker);
		},
		
		setMarker:function(results, status){
				  gmap.map.setCenter(results[0].geometry.location);
				  this.marker = new google.maps.Marker({
					map: gmap.map,
					position: results[0].geometry.location,
					draggable : true
				  });
		}
	}
