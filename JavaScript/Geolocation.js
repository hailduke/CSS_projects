<html>
<head>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
  <script>
    function initMap() 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
    },
    function(error) {
      console.log("Ошибка определения местоположения: " + error.message);
    }
  );
} else {
  console.log("Geolocation не поддерживается вашим браузером.");
}

  </script>
</head>
<body>
  <div id="map" style="width: 100%; height: 400px;"></div>
</body>
</html>