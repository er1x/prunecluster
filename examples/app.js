'use strict';

var L            = require('leaflet');
var PruneCluster = require('../prunecluster');

L.Icon.Default.imagePath = '../node_modules/leaflet/dist/images';

var map = L.map('map').setView([40, -4], 6);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

var leafletView = new PruneCluster();
var size = 100;
var markers = [];
for (var i = 0; i < size; ++i) {
  var marker = new PruneCluster.Marker(40 + (Math.random() - 0.5) * 0.00001 * size, -4 + (Math.random() - 0.5) * 0.00002 * size);
  markers.push(marker);
  leafletView.RegisterMarker(marker);
}
map.addLayer(leafletView);