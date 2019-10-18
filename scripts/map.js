var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('get__map'), {
    center: {lat: -7.937827, lng: 112.626571},
    zoom: 14,
    disableDefaultUI: true,
    // scrollwheel: false,          
    styles: [
    {
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#c8c4da"
      }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#8e8899"
      }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
      {
        "color": "#cfcde7"
      }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#bdbdbd"
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#c8c4da"
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#757575"
      }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#c8c4da"
      }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#9e9e9e"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#bdb8cc"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
      {
        "visibility": "on"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#cfcde7"
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#bfbad0"
      },
      {
        "weight": 2
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#757575"
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#cfbf8b"         
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#c2ae85"         
      },
      {
        "weight": 2
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },      
    {
      "featureType": "road.local",
      "stylers": [
      {
        "visibility": "on"
      }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#9e9e9e"
      }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#bcb7cc"
      }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#eeeeee"
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#9dabe5"
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "color": "#9e9e9e"
      }
      ]
    },
    {
      "featureType": "transit.station.airport",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#bbb5ca"
      }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "labels",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    }
    ],
  });
  marker = new google.maps.Marker({
    position: {lat: -7.928714, lng: 112.640289},
    map: map,
    icon: 'Mark.png',
  });
}

