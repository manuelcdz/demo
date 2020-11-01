var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
+ 'contributors',
maxZoom: 18
});

var paises = new L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
 layers: 'countries',
 format: 'image/png',
 transparent: true,
 attribution: "NaturalEarth"
});

var ciudades = new L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
 layers: 'cities',
 format: 'image/png',
 transparent: true,
 attribution: "NaturalEarth"
});

var baseMaps = {
 "OpenStreetMap": osm
};
var overlayMaps = {
     "<img src='https://secure.webtoolhub.com/static/resources/icons/set20/309ee4e2927.png'height=15px, width=15px /> Paises": paises,
     "<img src='https://mappinggis.com/webmapping/city.png'/> Ciudades":ciudades
};



var map = L.map('map', {
 center: new L.LatLng(41.66, -4.72),
 zoom: 4,
 layers: [osm, paises, ciudades]
});