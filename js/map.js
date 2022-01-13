var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map__location'), {
    center: {lat: 50.44447498773779, lng: 30.528858744959525},
    zoom: 14,
    mapId: "f0daff06ad023876",
    disableDefaultUI: true,
    // scrollwheel:false,
  });
  marker = new google.maps.Marker({
    position: {lat: 50.44447498773779, lng: 30.528858744959525},
    map: map,
    icon: './img/Pin.png',
  });
}

