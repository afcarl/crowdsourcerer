// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow, marker;

function initMap() {
  //var defaultPosition = {lat: -34.397, lng: 150.644};
  $('#map').html()
  //infoWindow = new google.maps.InfoWindow;
  refreshMap();

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function refreshMap () {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 18,
        streetViewControl: false,
        mapTypeControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      marker = new google.maps.Marker({
                         position: pos,
                         map: map,
                         title: 'Add a new place!',
                         draggable: true,
                         position_changed 	: function () {
                           console.log('new position. lat: ' + marker.getPosition().lat() + 'long: ' + marker.getPosition().lng())
                           $('#lat').val(marker.getPosition().lat());
                           $('#lng').val(marker.getPosition().lng());
                         }
                       });
      map.setZoom(18);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

}
