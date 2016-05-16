$(document).ready(function() {
  $("#getGeo").click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        $.ajax({
          url : "https://api.wunderground.com/api/cb1049bca912a982/conditions/q/"+lat+ "," + lon+".json",
          dataType : "jsonp",
          success : function(parsed_json) {
            var location = parsed_json['current_observation']['display_location']['city'];
            var temp_f = parsed_json['current_observation']['temp_f'];
            alert("Current temperature in " + location + " is: " + temp_f);
          }
        });
      });
    };
  });
});
