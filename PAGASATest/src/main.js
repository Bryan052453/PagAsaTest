// add your javascript code here
var map = L.map('map').setView([11, 123], 6);

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=Ha56is8yKNVXNA3PxaCu', {
attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', 
 }).addTo(map);



    let popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
            "You clicked the map at -<br>" + 
            "<b>lon:</b> " + e.latlng.lng + "<br>" + 
            "<b>lat:</b> " + e.latlng.lat
        )
        .openOn(map);
}
map.addEventListener("click", onMapClick);


function getColor(d) {
    return d == "Cordillera Administrative Region (CAR)" ? '#158cea' :
           d == "Central Luzon (Region III)"  ? '#d200ff' :
           d == "Caraga (Region XIII)" ? '#f0180f' :
           d == "Western Visayas (Region VI)"  ? '#e8ff00' :
           d == "Cagayan Valley (Region II)"  ? '#18e738' :
           d == "CALABARZON (Region IV-A)"   ? '#FEB24C' :
           d == "Central Visayas (Region VII)"   ? '#0ef181' :
           d == "Northern Mindanao (Region X)"   ? '#f906f9' :
           d == "Bicol Region (Region V)"   ? '#724ab5' :
           d == "Ilocos Region (Region I)"   ? '#ff0700' :
           d == "Metropolitan Manila"   ? '#00dbff' :
           d == "MIMAROPA (Region IV-B)"   ? '#1f00ff' :
           d == "Zamboanga Peninsula (Region IX)"   ? '#eaff00' :
           d == "Davao Region (Region XI)"   ? '#3239cd' :
           d == "SOCCSKSARGEN (Region XII)"   ? '#ff00e8' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.REGION),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 4,
        color: 'gray',
        fillColor: 'white',
        fillOpacity: 0.2
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(PHmap, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

//L.geoJson(PHmap).addTo(map);

var myStyle = {
    "color": "#fd1a02",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(PARmap, {
    style: myStyle
}).addTo(map);



function highlightPHFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 4,
        color: 'gray',
        fillColor: 'white',
        fillOpacity: 0.2
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

//L.geoJSON(PHmap).addTo(map);



