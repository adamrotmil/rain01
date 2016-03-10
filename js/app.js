$(document).ready(function() {
	// make the city text editable inline
	$('h1.location-head').inputizer(function(value) {
		console.log(value);
		getWeather();
	});

	function getWeather() {
		// get city name from element
		var citysearch = $("h1.location-head").text();
		// convert city name to coordinates
		$.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + citysearch + "&sensor=false")
		.done(function(cityname) {
			console.log(cityname.results[0].geometry.location.lat);
			console.log(cityname.results[0].geometry.location.lng);
			console.log(cityname.results[0].formatted_address);

		// get the weather keyword
		var apiKey = 'c614101fd6eadbf4e42194a547c4f07b';
		var url = 'https://api.forecast.io/forecast/';
		var lati = cityname.results[0].geometry.location.lat;
		var longi = cityname.results[0].geometry.location.lng;
		var data;
		$.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
			if (data.currently.icon == "clear-night") {
				keyword = "night"
			} else if (data.currently.icon == "rain") {
				keyword = "rain"
			} else if (data.currently.icon == "partly-cloudy-night") {
				keyword = "clouds"
			} else {
				keyword = "weather"
			};
			console.log(data.currently.icon);
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





	});

	};
	getWeather();
});

//////////////////////////////////////////////////////////////// To Do List /////////////////////////////////////////////////////////////////////
// 
// - Social Buttons
// - Set up views where you can store a list of "favorite" cities that you want to know the weather about.
// --- DONE --- Inline editing of city name (adjust the styling of this)
// --- DONE --- Set up the weather API to detect rain in a given location and have it trigger the GIF.
// --- DONE --- Convert a city name string into LAT and LONG for getWeather()
// --- DONE --- Detect if the GIF fills less than 100% of the vertical image area on screen, if so then expand image proportionally and crop to center.
//
//
//
//
