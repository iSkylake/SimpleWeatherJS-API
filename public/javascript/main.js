$(document).ready(function(){
	$("#searchButton").click(function(){
		var location = $("#searchInput").val();
		console.log(location);
		$.simpleWeather({
			location: location,
			woeid: '',
			unit: 'f',
			success: function(weather){
				// html = '<p>' + weather.temp + '&deg;' + weather.units.temp + '</p>';
				// $("#weather").html(html);

				html = '<p class="date">Today:</p><div class="weather"><div class="temperature"><p>'+weather.temp+'&deg;'+weather.units.temp+'</p></div>'+'<div><img class="weather-icon" src="img/weathericons/'+weather.code+'.svg"></img></div></div>';

				for(var i=0; i<weather.forecast.length; i++){

					// html += '<p>' + weather.forecast[i].day + ':' + weather.forecast[i].high + '</p>';
					// htmt += '<p><i class="icon-' + weather.code +'"></i>';
					html += '<p class="date">'+weather.forecast[i].date+':</p><div class="weather"><div class="temperature"><p>'+weather.forecast[i].high+'&deg;'+weather.units.temp+'</p></div>'+'<div><img class="weather-icon" src="img/weathericons/'+weather.forecast[i].code+'.svg"></img></div></div>';
					// html = '<img class="weathericon" src="images/weathericons/'+weather.code+'.svg">';
				}
				$('#weather').html(html);
			},
			error: function(error){
				$('#weather').html('<p>' + error + '</p>');
			}
		});
	});
});