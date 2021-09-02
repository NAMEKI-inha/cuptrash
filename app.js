function initMap(){

    const CenterOfInha = {lat: 37.450226544650796, lng: 126.65341280392303 };
    
    const JungSuck = {lat: 37.449260840415505, lng: 126.65237714828658};
    const Second= {lat:37.45035210043543, lng:126.65571382462987};
    const Fourth= {lat:37.450364876555454, lng:126.65521493376887};
    const Central = {lat:37.44936407387921, lng:126.65442636434341};
    const Memorial = {lat:37.45049857554343, lng:126.65401616249991};
    const HighTech = {lat:37.450565715651095, lng:126.65720597203132};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: CenterOfInha,
    });

    new google.maps.Marker({
        position: JungSuck,
        map,
        title: "JungSuck",
        icon: {
            url: "Normal-Trash-Can.svg",
            scaledSize: new google.maps.Size(38,31)
        }
    });

    new google.maps.Marker({
        position: Second,
        map,
        title: "2호관",
        icon: {
            url: "Normal-Trash-Can.svg",
            scaledSize: new google.maps.Size(38,31)
        }
    });

    new google.maps.Marker({
        position: Fourth,
        map,
        title: "4호관",
        icon: {
            url: "Normal-Trash-Can.svg",
            scaledSize: new google.maps.Size(38,31)
        }
    });

    new google.maps.Marker({
        position: Central,
        map,
        title: "본관",
        icon: {
            url: "Normal-Trash-Can.svg",
            scaledSize: new google.maps.Size(38,31)
        }
    });

    new google.maps.Marker({
        position: Memorial,
        map,
        title: "60주년기념관",
        icon: {
            url: "Normal-Trash-Can.svg",
            scaledSize: new google.maps.Size(38,31)
        }
    });

    new google.maps.Marker({
        position: HighTech,
        map,
        title: "하이테크센터",
        icon: {
            url: "Normal-Trash-Can.svg",
            scaledSize: new google.maps.Size(38,31)
        }
    });

}