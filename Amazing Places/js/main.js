// Initialisation of the position variables , the map and the infowindow ( The box containing informations about the place)

var paris = {lat: 48.866667 , lng: 2.333333};
var map;
var infoWindow;

// Callback function that initializes the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'),{
    center: paris,
    zoom: 6
  });

  infowindow = new google.maps.InfoWindow();


}

// Function to translate the (latitude, longitude) to a human readable address
function gecodeAddress(geocoder, map, position) {
  var latlng = position;
  // Request to the API and passinf the position parameters
  geocoder.geocode({'location': latlng}, function(results, status) {
          // if the request is successful
          if (status === 'OK') {
            if (results[0]) {
              // Insert the resulting text in the address input
              document.getElementById("choosedAddress").value = results[0].formatted_address;
              // INsert the position in the hidden input for later use
              document.getElementById("choosedPos").value = results[0].geometry.location.lat()+":"+results[0].geometry.location.lng();
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });

}

window.onload = function(){
  // a call to the initMap() defined at the top
  initMap();
  // Defining a click event listener on the Address input field
  $("#choosedAddress").click(function() {

    // Testing if the browser supports geolocalization / if the user accepted to share it
    if (navigator.geolocation) {
      // call to browser function to get position
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // Inserting a marker at the corresponding position in the map
        var marker = new google.maps.Marker({position:pos,map:map});
        // centring the map
        map.setCenter(pos);
        var geocoder = new google.maps.Geocoder;
        // Call the function to translate position to address
        var address = gecodeAddress(geocoder, map,pos);
        console.log(address);

      });


  };

});
  // add event listener for simple clicks on the map
  map.addListener('click', function(e) {

    var geocoder = new google.maps.Geocoder;
    // Capturing the position that correspond to the pixel click in the map and callsing the address translation function
    gecodeAddress(geocoder,map,e.latLng);

  });
  // Adding event listener for the submit button
  $("#btn_search").click(function(){

    var API_KEY = "AIzaSyC2O8-GleQFrgFl-EX_FmiKUYAyg8nqL2k";
    // Preparing variables that will hold informations entered in the form
    var type, address, radius, keyword, position;

    type = $("input[name='options']:checked").val();
    address =$("#choosedAddress").val();
    radius  = $("#choosedRadius").val();
    keyword = $("#choosedKeyword").val();
    var latitude, longitude;
    latitude = $("#choosedPos").val().split(":")[0];
    longitude = $("#choosedPos").val().split(":")[1];
    position = new google.maps.LatLng(latitude, longitude);

    // XHTMPRequest to the link
    var link = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+position.lat+","+position.lng+"&radius="+radius+"&type="+type+"&keyword="+keyword+"&key="+API_KEY;
    // preparing GOOGLE PLACES Request Params
    var request = {
        location: position,
        radius: radius,
        query: type+' '+keyword
      };
    console.log(typeof(radius));
    console.log(map);
    // Calling the PlacesService object , with a textSearch function
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, function (results, status) {
      // Testing if there were no problems in the request protocol
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        // Iterating over all the resulting places
        for (var i = 0; i < results.length; i++) {
          // Recalculate distance between each result and the choosen position to guarante that its in the circle 
          if ( google.maps.geometry.spherical.computeDistanceBetween(results[i].geometry.location, position) < request.radius)
          {
            // Call the custom funciton createMarker for each one
            createMarker(results[i]);
          }

        }
      }
    });
  });

}

// Function that takes as argument a place and creates a marker for it on the map + box with informations
function createMarker(place) {
        // Creation of a marker at the given position of the place
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        // Adding click event listener on the marker to show a box with relative informations
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
