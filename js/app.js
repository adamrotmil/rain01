$(document).ready(function() {
	function getImage() {
		$.get("http://api.giphy.com/v1/gifs/search?q=rain&api_key=dc6zaTOxFJmzC&limit=200")
		.done(function(data) {
			console.log("success got data", data.data[0].images.downsized_medium.url);
			console.log(data);

			var num = Math.floor((Math.random() * 100));
			console.log("Num is " + num)

			var imageData = data.data[num].images.downsized_medium.url;
			console.log("Assigned imageData as" + imageData);

			// Append the GIF to the view
			$('.render-weather').css("background-image", "url(" + imageData + ")");
		});
	};
	getImage();

	$(document).on('mousedown', '#happy', function() {
		console.log("clicked happy days");
		var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=200");
		xhr.done(function(data) {
			console.log("success got data", data.data[0].images.downsized_medium.url);

			var num = Math.floor((Math.random() * 100));
			console.log("Num is " + num)

			var imageData = data.data[num].images.downsized_medium.url;
			console.log("Assigned imageData as" + imageData);

			// Append the GIF to the view

			$('.render-weather').empty().append(
				("<img style=\"width: inherit; \" src = " + imageData + " / > ")
				);
		});
	});
});