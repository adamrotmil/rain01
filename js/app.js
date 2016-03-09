$(document).ready(function() {
	function getWeather() {
		// convert city name to coordinates
		$.get("http://maps.googleapis.com/maps/api/geocode/json?address=Paris&sensor=false")
		.done(function(cityname) {
			console.log(cityname.results[0].geometry.location);
			console.log(cityname.results[0].formatted_address);	
		});
		// get the weather keyword
		var apiKey = 'c614101fd6eadbf4e42194a547c4f07b';
		var url = 'https://api.forecast.io/forecast/';
		var lati = 25.234479;
		var longi = 110.179954;
		var data;
		$.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
			if (data.currently.icon == "clear-night") {
				keyword = "night"
			} else if (data.currently.icon == "rain") {
				keyword = "rain"
			};
			// get the GIF
			$.get("http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=500")
			.done(function(data) {
				var num = Math.floor((Math.random() * 490));
				var imageData = data.data[num].images.downsized_medium.url;
				// Append the GIF to the view
				$('.render-weather').fadeTo(2000, 0.1, function()
				{
					$(this).css("background-image", "url(" + imageData + ")");
				}).fadeTo('slow', 1);
			});
		});
	};
	getWeather();
});

//////////////////////////////////////////////////////////////// To Do List /////////////////////////////////////////////////////////////////////
// 
// - Social Buttons
// - Set up views where you can store a list of "favorite" cities that you want to know the weather about.
// - Set up the weather API to detect rain in a given location and have it trigger the GIF.
// - Convert a city name string into LAT and LONG for getWeather()
// --- DONE --- Detect if the GIF fills less than 100% of the vertical image area on screen, if so then expand image proportionally and crop to center.
//
//
//
//
