window.onload = function () {

    document.getElementById('queryButton').addEventListener('click', function () {

        var url = '/overpass';

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                console.log(this.response);

                var GEOjson = JSON.parse(this.response);
                console.log(GEOjson);

                L.geoJson(GEOjson, {
                    onEachFeature: onEachFeature
                }).addTo(map);
            }
        };

        request.open("GET", url);
        request.send();

    });
};

function onEachFeature(feature, layer) {
    if (feature.properties.tags) {

        var prop = feature.properties.tags;


        layer.bindPopup('<b>ID: ' + feature.id + '</b></br>'
            + 'Bridge: ' + (prop.bridge ? 'yes' : 'no') + '</br>'
            + 'Electrified: ' + prop.electrified + '</br>'
            + 'Frequency: ' + prop.frequency + '</br>'
            + 'Gauge: ' + prop.gauge + '</br>'
            + 'Layer: ' + prop.layer + '</br>'
            + 'Maxspeed: ' + prop.maxspeed + '</br>'
            + 'Operator: ' + prop.operator + '</br>'
            + 'Passenger_Lines: ' + prop.passenger_lines + '</br>'
            + 'Railway: ' + prop.railway + '</br>'
            + 'Tracks: ' + prop.tracks + '</br>'
            + 'Usage: ' + prop.usage + '</br>'
            + 'Voltage: ' + prop.voltage + '</br>'
        );


        /*
        layer.bindPopup('<b>ID: ' + feature.id + '</b></br>'
            + 'Highway: ' + prop.highway + '</br>'
            + 'Lanes: ' + prop.lanes + '</br>'
            + 'Lit: ' + prop.lit + '</br>'
            + 'MaxSpeed: ' + prop.maxspeed + '</br>'
            + 'Name: ' + prop.name + '</br>'
            + 'Oneway: ' + prop.oneway + '</br>'
            + 'Ref: ' + prop.ref + '</br>'
            + 'Sidewalk: ' + prop.sidewalk + '</br>'
        );
        */
    }
}