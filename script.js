var points = data;
var leafletMap = L.map('map').setView([21.028066, 105.829293], 13); // view map Ha Noi

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(leafletMap);
L.canvasLayer()
    .delegate(this)
    .addTo(leafletMap);
var stt = "ở đây có bệnh dịch";
var cssCircle = {
    color: 'red'
}
var cssPologon = {
    color: 'red',
    fillColor: '#000',
    // weight: 0.5,
    fillOpacity: 0.5
}
var corona = L.icon({
    iconUrl: './src/images/corona.png', //name icon
    iconSize: [90, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [90, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET' , 'geojson.json');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    // console.log(ourData);
    var data = ourData.features;
    // console.log(data1)
    marker(data)
  }

function marker(data) { 
  for(i = 0; i < data.length; i++){
    var coordinate = data[i].geometry;
    // console.log(coordinate)
    for(ii = 0; ii < coordinate.coordinates.length; ii++){
      var countMap = coordinate.coordinates.length;
       var coordinateMap = coordinate.coordinates
      console.log( typeof coordinateMap.length);
      var count = 0;
      if(coordinateMap[0]){
        L.marker(coordinateMap[0], {icon: corona}).addTo(leafletMap).bindPopup(stt);
        // L.circle(coordinateMap[1], 1000, cssCircle).addTo(leafletMap).bindPopup(stt);
        // L.polygon([coordinateMap[2]],cssPologon).addTo(leafletMap).bindPopup(stt);
      }
      if (coordinateMap[1]) {
        L.circle(coordinateMap[1], 1000, cssCircle).addTo(leafletMap).bindPopup(stt);
      }
      if (coordinateMap[2]) {
        L.polygon([coordinateMap[2]],cssPologon).addTo(leafletMap).bindPopup(stt);
      }
    }
  }
}
ourRequest.send();
    // L.marker(data, {icon: corona}).addTo(leafletMap).bindPopup(stt);
    // L.marker([21.032481, 105.826600], {icon: corona}).addTo(leafletMap).bindPopup(stt);
    // L.marker([21.03724, 105.8446], {icon: corona}).addTo(leafletMap).bindPopup(stt);


  // $.ajax(
  //     {
  //       type: 'GET',
  //       url: "http://localhost/leaflet/geojson.json",
  //       success: function(response) {
  //           console.log("Data type: " + (typeof response.features));
  //           // var featuresString = JSON.stringify(response.features);
  //           // for (var i = 0; i < response.features[0].coordinates.length; i++) {
  //           var maket = response.features[0].geometry.coordinates;
  //           console.log(typeof maket[0])
  //           marker(maket);
  //           marker(maket);
           
  //       }
  //     }
  //   );
function clickMap(e) {
    var popLocation = e.latlng;
    var popup = L.popup()
        .setLatLng(popLocation)
        .setContent(`Bạn Đã Click Địa Chỉ Có Tọa Độ ${popLocation}`)
        .openOn(leafletMap);
}
leafletMap.on('click', clickMap)

// renderMap();

// L.geoJSON(geojson, {
//         style: function(Feature) {
//             return {
//                 color: 'black'
                
//             }
//         }
//     })
//     .addTo(leafletMap);
function onDrawLayer(info) {
    var ctx = info.canvas.getContext('2d');
    ctx.clearRect(0, 0, info.canvas.width, info.canvas.height);
    ctx.fillStyle = "rgba(255,116,0, 0.2)";
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        if (info.bounds.contains([d[0], d[1]])) {
            dot = info.layer._map.latLngToContainerPoint([d[0], d[1]]);
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
};
// canvas
