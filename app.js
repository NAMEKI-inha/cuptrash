function initMap(){

    var options = {
        center: {lat: 37.450226544650796, lng: 126.65341280392303 },
        zoom: 17
    }

    map = new google.maps.Map(document.getElementById("map"), options)
}