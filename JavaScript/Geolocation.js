<!DOCTYPE html>
<html>
<head>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key= &callback=initMap"></script>
  <script>
    function initMap() 
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          var map = new google.maps.Map(document.getElementById('map'), {
            center: userLocation,
            zoom: 15
          });

          var marker = new google.maps.Marker({
            position: userLocation,
            map: map
          });
        });
      } else {
        console.log("Geolocation не підтримується вашим браузером.");
      }
    
  </script>
</head>
<body>
  <div id="map" style="width: 100%; height: 400px;"></div>
</body>
</html>