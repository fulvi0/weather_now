$(document).ready(function() {
  // button active the funcition to get the gelocation and show info.
  $("#getGeo").click(function() {
    if (navigator.geolocation) {
      // request to the browser for the location of the machine.
      navigator.geolocation.getCurrentPosition(function(position) {
        // variable for geolocation.
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // request json info with api - weather channel.
        $.ajax({
          url: "https://api.wunderground.com/api/cb1049bca912a982/conditions/q/" + lat + "," + lon + ".json",
          dataType: "jsonp",
          success: function(parsed_json) {
            // variable for consulte json file.
            var html = '';
            // lookup for the city.
            var location = parsed_json['current_observation']['display_location']['city'];
            // lookup for the temp - fahrenheit.
            var temp_f = parsed_json['current_observation']['temp_f'];
            // lookup for the weather condition on time.
            var weather = parsed_json['current_observation']['weather'];

            // Displey information on div named location.
            html += "Weather status: " + weather + "<br>" +
              "Location: " + location + " - the temp is: " +
              "<a id='converter'> " + temp_f + "</a> Fº"+ "<br>";

            switch (weather){
              case "Scattered Clouds":
                html += "<i class='wi wi-day-cloudy-high'></i>";
                break;
              case "Rain":
                html += "<i class='wi wi-day-rain'></i>";
                break;
              case "Cloudly":
                html += "<i class='wi wi-day-cloudy'></i>";
                break;
              case "Sunny":
                html += "<i class='wi wi-day-sunny'></i>";
                break;
              case "storm":
                html += "<i class='wi wi-day-sleet-storm'></i>";
                break;
            };

            $("#location").html(html);

            $("#converter").click(function() {
              var temp_cs = ((temp_f - 32) * 5 / 9).toFixed(1);
              $("#show_temp").html(temp_cs += " Cº");
            });
          }
        });
      });
    };
  });
});
