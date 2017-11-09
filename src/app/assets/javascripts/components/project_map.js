var map;

function initialize() {
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
    var mapOptions = {
        zoom: 4,
        center: myLatlng
    };
    map = new google.maps.Map(document.getElementById('project-map'),
        mapOptions);


}

google.maps.event.addDomListener(window, 'load', initialize);