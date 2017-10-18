
//update GPS location on button click
$('#gps-button').click(function (e) {
  e.preventDefault()
  getLocation();
})

function getLocation () {
  GPS.get(updateLocation)
  $('#latitude').val('loading...');
  $('#longitude').val('loading...');
  $('#accuracy').val('loading...');
}

function updateLocation () {
  $('#latitude').val(GPS.position.latitude);
  $('#longitude').val(GPS.position.longitude);
  $('#accuracy').val(GPS.position.accuracy);
}

$('#accuracy').change(function (){

  $('#gps-status').html()
})

$(document).ready(function (){
  /*if (GPS.position.accuracy > 25 && GPS.attempts <3) {
    getLocation();
  }*/
  getLocation();
})
