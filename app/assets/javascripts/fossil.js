$(document).ready(function(){
  requestList();
  // requestDetail(); //disable bc we dont understand the api for this yet
});

var requestList = function(){
    var request = $.ajax({
      url:'/welcome/getList',
      method: 'GET'
    });

  request.done(function(response){
    // console.log("we got list!");
    // console.log(response);
    var records = response.records;
    for(var i=0 ; i < records.length ; i++){
      placePin(records[i]);
    }
  });
};

var requestDetail = function(){
    var request = $.ajax({
      url:'/welcome/getDetail',
      method: 'GET'
    });

    request.done(function(response){
      console.log("we got detail!")
      console.log(response);
    });
};

var style = [{
  "elementType": "geometry",
  "stylers": [{
    "hue": "#ff4400"
  }, {
    "saturation": -68
  }, {
    "lightness": -4
  }, {
    "gamma": 0.72
  }]
}, {
  "featureType": "road",
  "elementType": "labels.icon"
}, {
  "featureType": "landscape.man_made",
  "elementType": "geometry",
  "stylers": [{
    "hue": "#0077ff"
  }, {
    "gamma": 3.1
  }]
}, {
  "featureType": "water",
  "stylers": [{
    "hue": "#00ccff"
  }, {
    "gamma": 0.44
  }, {
    "saturation": -33
  }]
}, {
  "featureType": "poi.park",
  "stylers": [{
    "hue": "#44ff00"
  }, {
    "saturation": -23
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "hue": "#007fff"
  }, {
    "gamma": 0.77
  }, {
    "saturation": 65
  }, {
    "lightness": 99
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "gamma": 0.11
  }, {
    "weight": 5.6
  }, {
    "saturation": 99
  }, {
    "hue": "#0091ff"
  }, {
    "lightness": -86
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "lightness": -48
  }, {
    "hue": "#ff5e00"
  }, {
    "gamma": 1.2
  }, {
    "saturation": -23
  }]
}, {
  "featureType": "transit",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "saturation": -64
  }, {
    "hue": "#ff9100"
  }, {
    "lightness": 16
  }, {
    "gamma": 0.47
  }, {
    "weight": 2.7
  }]
}]

var googleMap;

function initMap() {
  var mapDiv = document.getElementById('map');
  googleMap = new google.maps.Map(mapDiv, {
    center: {lat: 39.50, lng: -98.35},
    zoom: 3,
    map: googleMap
  });

  googleMap.setOptions({ styles: style });
}

var placePin = function(record) {
  var LatLng = new google.maps.LatLng(record.lat, record.lng);
  var marker = new google.maps.Marker({
                  position: LatLng,
                  map: googleMap,
                  title: record.oid.toString()
               });
};
