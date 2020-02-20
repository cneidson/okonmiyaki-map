mapboxgl.accessToken = 'pk.eyJ1IjoiY25laWRzb24iLCJhIjoiY2s2b2dseXRqMTd6NzNrbzZhM20wa240cCJ9.Ba3dfLpzNZaxw1izIYezpw';


// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-73.987, 40.735]
var initialZoom = 11.67


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/light-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


let markers = {};
restaurData.forEach(function(restaurEntry) {
  markers[`${restaurEntry.name}`] = new mapboxgl.Marker()
    .setLngLat([restaurEntry.longitude, restaurEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(`<div class="markerbg">${restaurEntry.name}</div>
              <p><b>Address:</b> ${restaurEntry.address}<br>
              <b>Website:</b> <a href="http://www.${restaurEntry.website}" target="_blank">${restaurEntry.website}</a><br>
              <b>Phone:</b> ${restaurEntry.phone}</p>`))
    .addTo(map);
})


$('#otafuku').on('click', function() {
  map.flyTo({
    center: [-73.988463, 40.729659],
    zoom: 19
  });
    markers ['Otafuku'].togglePopup();
})

$('#bargoto').on('click', function() {
  map.flyTo({
    center: [-73.989525, 40.722992],
    zoom: 16
  });
    markers ['Bar Goto'].togglePopup();
})

$('#dokodomo').on('click', function() {
  map.flyTo({
    center: [-73.989645, 40.726584],
    zoom: 16
  });
    markers ['DokoDomo'].togglePopup();
})

$('#donburiya').on('click', function() {
  map.flyTo({
    center: [-73.983025, 40.766292],
     zoom: 16
  });
    markers ['Donburiya'].togglePopup();
})

$('#hanamichi').on('click', function() {
  map.flyTo({
    center: [-73.987024, 40.747828],
    zoom: 16
  });
    markers ['HanaMichi'].togglePopup();
})

$('#kenka').on('click', function() {
  map.flyTo({
    center: [-73.988464, 40.729143],
    zoom: 19
  });
    markers ['Kenka'].togglePopup();
  })



$('#sunrise').on('click', function() {
  map.flyTo({
    center: [-73.980736, 40.752396],
    zoom: 16
  });
  markers ['Sunrise Mart'].togglePopup();
})


$('#ivan').on('click', function() {
  map.flyTo({
    center: [-73.9845, 40.720777],
    zoom: 16
  });
    markers ['Ivan Ramen'].togglePopup();
})


$('#shalom').on('click', function() {
  map.flyTo({
    center: [-73.955794, 40.709352],
    zoom: 16
  });
    markers ['Shalom Japan'].togglePopup();
})


$('#muramen').on('click', function() {
  map.flyTo({
    center: [-73.950659, 40.744035],
      zoom: 16
  });
    markers ['Mu Ramen'].togglePopup();
})
