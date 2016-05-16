$(document).ready(function() {
  $("#getGeo").click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        $.getJSON("https://api.wunderground.com/api/cb1049bca912a982/geolookup/q/"+lat+ "," + lon+".json", function(result) {
          $.each(result, function(i, field) {
            $("#location").append(field + " ");
          });
        });
      });
    };
  });
});
