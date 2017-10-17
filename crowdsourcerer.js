
//update GPS location on button click
$('#gps-button').click(function (e) {
  e.preventDefault()
  GPS.get(updateLocation)
  $('#latitude').val('loading...');
  $('#longitude').val('loading...');
  $('#accuracy').val('loading...');
})

function updateLocation () {
  $('#latitude').val(GPS.position.latitude);
  $('#longitude').val(GPS.position.longitude);
  $('#accuracy').val(GPS.position.accuracy);
}
