	document.addEventListener("DOMContentLoaded", function() {
		gmap.init();
		gmap.render("map-canvas");
	});

	document.getElementById("sButton").addEventListener("click", function() {
		var userInput = document.getElementById("target").value;
		gmap.search(userInput);
	});