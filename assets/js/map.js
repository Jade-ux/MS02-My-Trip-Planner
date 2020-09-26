"use strict";

let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 51.8898394,
      lng: -2.1525132,
    },
    zoom: 10,
    mapTypeId: "roadmap",
  });
}

console.log("hello");