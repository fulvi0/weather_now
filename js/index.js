$(document).ready(function() {
  $("#getGeo").click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=8191185ae7a955c5e64f8b6cffa991df", function(result) {
          $.each(result, function(i, field) {
            $("#location").append(field + " ");
          });
        });
      });
    };
  });
});
