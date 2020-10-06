"use strict";

let map;
let places; 
let infoWindow;
let markers = [];
let autocomplete;
const countryRestrict = {
    country: "uk",
};

const MARKER_PATH =
  "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");
//List of countries for drop-down 
const countries = {
  au: {
    center: {
      lat: -25.3,
      lng: 133.8,
    },
    zoom: 4,
  },
  br: {
    center: {
      lat: -14.2,
      lng: -51.9,
    },
    zoom: 3,
  },
  ca: {
    center: {
      lat: 62,
      lng: -110.0,
    },
    zoom: 3,
  },
  fr: {
    center: {
      lat: 46.2,
      lng: 2.2,
    },
    zoom: 5,
  },
  de: {
    center: {
      lat: 51.2,
      lng: 10.4,
    },
    zoom: 5,
  },
  mx: {
    center: {
      lat: 23.6,
      lng: -102.5,
    },
    zoom: 4,
  },
  nz: {
    center: {
      lat: -40.9,
      lng: 174.9,
    },
    zoom: 5,
  },
  it: {
    center: {
      lat: 41.9,
      lng: 12.6,
    },
    zoom: 5,
  },
  za: {
    center: {
      lat: -30.6,
      lng: 22.9,
    },
    zoom: 5,
  },
  es: {
    center: {
      lat: 40.5,
      lng: -3.7,
    },
    zoom: 5,
  },
  ind: {
    center: {
      lat: -20.59,
      lng: 78.96,
    },
    zoom: 6,
  },
  pt: {
    center: {
      lat: 39.4,
      lng: -8.2,
    },
    zoom: 6,
  },
  us: {
    center: {
      lat: 37.1,
      lng: -95.7,
    },
    zoom: 3,
  },
  uk: {
    center: {
      lat: 54.8,
      lng: -4.6,
    },
    zoom: 5,
  },
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: countries["uk"].zoom,
    center: countries["uk"].center,
    mapTypeControl: false,
    panControl: true,
    zoomControl: true,
    streetViewControl: false,
  });
 infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("info-content"),
  }); 
    //Create the autocomplete object and associate it with the 'cities' search box.
    //Restrict the search to the UK and place type to 'cities'.
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ["(cities)"],
      componentRestrictions: countryRestrict,
    }
  );
  places = new google.maps.places.PlacesService(map);
//Add an event listener to the country
autocomplete.addListener("place_changed", onPlaceChanged);
//Zoom the map to the chosen city
 document
    .getElementById("country")
    .addEventListener("change", setAutocompleteCountry);
}

function onPlaceChanged() {
    const place = autocomplete.getPlace();
      if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
}else{
    document.getElementById("autocomplete").placeholder = "Enter a city";
    }
} 

//Checks which option is checked and fires up the search function for that option
$('#accommodation-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
 //If I want to show more than one option on the map at one time, will need an else statement
    }
});

$('#restaurant-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#museum-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#art-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#attraction-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#entertainment-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#night_life-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#shopping-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#worship-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

$('#spa-option').change(function(){
    if($(this).is(':checked')) {
        searchOptions();
           }
});

function searchOptions() {
  if ($('#accommodation-option').is(':checked')) {
    var search = {
    bounds: map.getBounds(),
    types: ['lodging'],
  }; 
  }else if (($('#restaurant-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['restaurant'],
  };
}else if (($('#museum-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['museum'],
  };
  }else if (($('#art-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['art_gallery'],
  };
    }else if (($('#attraction-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['tourist_attraction', 'zoo', 'aquarium'],
  };
      }else if (($('#entertainment-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['casino', 'bowling_alley', 'amusement_park', 'movie_theater'],
  };
  }else if (($('#night_life-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['night_club', 'bar'],
  };
}else if (($('#shopping-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['shopping_mall', 'jewelry_store', 'home_goods_store', 'clothing_store', 'book_store', 'store', 'shoe_store'],
  };
  }else if (($('#worship-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['church', 'mosque', 'hindu_temple', 'synagogue'],
  };
    }else if (($('#spa-option').is(':checked'))){
  var search = {
    bounds: map.getBounds(),
    types: ['spa', 'beauty_salon', 'hair_care'],
  } 
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults(); //Clears the results on the table
            clearMarkers(); //Creates markers for each place
            for(let i =0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon,
        }); 
        //This opens an infobox about the place when an icon on the map is clicked
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], "click", showInfoWindow);
        setTimeout(dropMarker(i), i * 100);
        addResult(results[i], i);
            }
        }
    });
}

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

function setAutocompleteCountry() {
    const country =document.getElementById("country").value;
    if (country == "all") { 
        autocomplete.setComponentRestrictions({
            country: [],
        });
        map.setCenter({
            lat: 15,
            lng: 0,
        });
  map.setZoom(2);
  } else {
    autocomplete.setComponentRestrictions({
      country: country,
    });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }
    clearResults();
    clearMarkers();
}

function dropMarker(i) {
  return function () {
    markers[i].setMap(map);
  };
}

function addResult(result, i) {
  const results = document.getElementById("results");
  const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
  const markerIcon = MARKER_PATH + markerLetter + ".png";
  const tr = document.createElement("div");
  tr.style.backgroundColor = i % 2 === 0 ? "#6fbdbf" : "#c8f3f4";
  tr.className = "col-3";
    //The line below will hide the table but still allow the windows to pop up when clicked on 
    //tr.style.visibility = "hidden";

  tr.onclick = function () {
    google.maps.event.trigger(markers[i], "click");
  };

  //const resultsHeading = document.createElement("h2");
  //resultsHeading.innerHTML = "Listings";
  const iconTd = document.createElement("div");
  const nameTd = document.createElement("div");
  nameTd.className = "listing-name-block";
  nameTd.style.color = i % 2 === 0 ? "#ffffff" : "#000000";
  const icon = document.createElement("img");
  iconTd.className = "listing-icon-block";
  icon.src = markerIcon;
  icon.setAttribute("class", "placeIcon");
  icon.setAttribute("className", "placeIcon");
  const name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  const results = document.getElementById("results");
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
} 

function showInfoWindow() {
  const marker = this;
  places.getDetails(
    {
      placeId: marker.placeResult.place_id,
    },
    (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }

      infoWindow.open(map, marker);
      buildIWContent(place);
    }
  );
} // Load the place information into the HTML elements used by the info window.

function buildIWContent(place) {
  document.getElementById("iw-icon").innerHTML =
    '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
  document.getElementById("iw-url").innerHTML =
    '<b><a id="placeName" href="' + place.url + '">' + place.name + "</a></b>";
  document.getElementById("iw-address").textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById("iw-phone-row").style.display = "";
    document.getElementById("iw-phone").textContent =
      place.formatted_phone_number;
  } else {
    document.getElementById("iw-phone-row").style.display = "none";
  } // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.

  if (place.rating) {
    let ratingHtml = "";

    for (let i = 0; i < 5; i++) {
      if (place.rating < i + 0.5) {
        ratingHtml += "&#10025;";
      } else {
        ratingHtml += "&#10029;";
      }

      document.getElementById("iw-rating-row").style.display = "";
      document.getElementById("iw-rating").innerHTML = ratingHtml;
    }
  } else {
    document.getElementById("iw-rating-row").style.display = "none";
  } // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.

  if (place.website) {
    let fullUrl = place.website;
    let website = String(hostnameRegexp.exec(place.website));

    if (!website) {
      website = "http://" + place.website + "/";
      fullUrl = website;
    }

    document.getElementById("iw-website-row").style.display = "";
    document.getElementById("iw-website").textContent = website;
  } else {
    document.getElementById("iw-website-row").style.display = "none";
  }

//Builds itinerary content
let myForm = document.getElementById("myForm");
let entry = document.getElementById("placeName");
let date = document.getElementById("iw-date");
let time = document.getElementById("iw-time");

let actualItinerary = document.getElementById("actualItinerary");

myForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  createEntry(date.value, time.value, entry.innerHTML);
});

function createEntry(x, y, z) {
  let ourHTML = `<li class="itinerary-list-item"><div class="inner-div col-3">${x}&nbsp;</div><div class=" inner-div col-3">${y}&nbsp;</div><div class="col-3 inner-div">${z}</div><button onclick="deleteItem(this)">Delete entry</button></li>`
  actualItinerary.insertAdjacentHTML("beforeend", ourHTML)
  entry.value = "";
  date.value = "";
  time.value = "";
};

}


function deleteItem(object) {
  object.parentElement.remove();
}
//Itinerary

/*
let myForm = document.getElementById("myForm");
let entry = document.getElementById("placeName");
let date = document.getElementById("iw-date");
let time = document.getElementById("iw-time");

let actualItinerary = document.getElementById("actualItinerary");

myForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  createEntry(date.value, time.value, entry.innerHTML);
  console.log(document.getElementById('placeName').value);
});

function createEntry(x, y, z) {
  let ourHTML = `<li class="itinerary-list-item"><div class="inner-div col-3">${x}&nbsp;</div><div class=" inner-div col-3">${y}&nbsp;</div><div class="col-3 inner-div">${z}</div><button onclick="deleteItem(this)">Delete entry</button></li>`
  actualItinerary.insertAdjacentHTML("beforeend", ourHTML)
}

function deleteItem(object) {
  object.parentElement.remove();
}

*/