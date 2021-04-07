// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoiZWx1a2VrZWVyd2VlciIsImEiOiJja21rbDhnMWcxMjNiMnBrNXh0dGlta2s3In0.xeUbN6y1SKo2izp3h82GdA';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',

  // Positioning the map on a certain longitute + latitude and zooming in
  center: [-80.52662, 28.45077],
  zoom: 16,
});





function getAPIdata () {

  var request = 'https://api.openweathermap.org/data/2.5/weather?lat=28.45077&lon=-80.52662&appid=883a7f39deb57a83de514e5bd87ec883';

  fetch(request)

  .then(function(response) {
    return response.json();
  })

  .then(function(response){
    console.log(response);
    var weatherBox = document.getElementById('weather');
   

    var degC = Math.floor(response.main.temp - 273.15);
    var degB = Math.floor(response.main.feels_like - 273.15);

    //weatherBox.innerHTML = 'Temp: ' + degC + '&#176;C <br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s';

    
    var popup = new mapboxgl.Popup().setHTML(weatherBox.innerHTML = 'Cape Canaveral </br>' + 'Temp: ' + degC + '&#176;C <br>' +  'Feels like: ' + degB + '&#176;C' + '<br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s'  );

    var marker = new mapboxgl.Marker({
      color: "#FF69B4",
      draggable: false,
      size: 'large'

    })
      .setLngLat([-80.52662, 28.45077])
      .setPopup(popup)
      .addTo(map);

  });
}

getAPIdata();


function getAPIdata2 () {

  var request = 'https://api.openweathermap.org/data/2.5/weather?lat=51.850460&lon=4.325670&appid=883a7f39deb57a83de514e5bd87ec883';

  fetch(request)

  .then(function(response) {
    return response.json();
  })

  .then(function(response){
    console.log(response);
    var weatherBox = document.getElementById('weather');
   

    var degC = Math.floor(response.main.temp - 273.15);
    var degB = Math.floor(response.main.feels_like - 273.15);


    //weatherBox.innerHTML = 'Temp: ' + degC + '&#176;C <br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s';

    
    var popup = new mapboxgl.Popup().setHTML(weatherBox.innerHTML = 'SpijkCity </br>' + 'Temp: ' + degC + '&#176;C <br>'+ 'Feels like: ' + degB + '&#176;C' + '<br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s');

    var marker = new mapboxgl.Marker({
      color: "#FF69B4",
      draggable: false,
      size: 'large'

    })
      .setLngLat([4.325670, 51.850460])
      .setPopup(popup)
      .addTo(map);

  });
}

getAPIdata2();

function getAPIdata3 () {

  var request = 'https://api.openweathermap.org/data/2.5/weather?lat=56.375149&lon=36.548851&appid=883a7f39deb57a83de514e5bd87ec883';

  fetch(request)

  .then(function(response) {
    return response.json();
  })

  .then(function(response){
    console.log(response);
    var weatherBox = document.getElementById('weather');
   

    var degC = Math.floor(response.main.temp - 273.15);
    var degB = Math.floor(response.main.feels_like - 273.15);


    //weatherBox.innerHTML = 'Temp: ' + degC + '&#176;C <br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s';

    
    var popup = new mapboxgl.Popup().setHTML(weatherBox.innerHTML = 'Chernobyl </br>' + 'Temp: ' + degC + '&#176;C <br>' + 'Feels like: ' + degB + '&#176;C' + '<br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s');

    var marker = new mapboxgl.Marker({
      color: "#FF69B4",
      draggable: false,
      size: 'large'

    })
      .setLngLat([36.548851, 56.375149])
      .setPopup(popup)
      .addTo(map);

  });
}

getAPIdata3();

function getAPIdata4 () {

  var request = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.340539&lon=115.091949&appid=883a7f39deb57a83de514e5bd87ec883';

  fetch(request)

  .then(function(response) {
    return response.json();
  })

  .then(function(response){
    console.log(response);
    var weatherBox = document.getElementById('weather');
   

    var degC = Math.floor(response.main.temp - 273.15);
    var degB = Math.floor(response.main.feels_like - 273.15);


    //weatherBox.innerHTML = 'Temp: ' + degC + '&#176;C <br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s';

    
    var popup = new mapboxgl.Popup().setHTML(weatherBox.innerHTML = 'Bali </br>' + 'Temp: ' + degC + '&#176;C <br>' + 'Feels like: ' + degB + '&#176;C' + '<br>' + 'Humidity: ' + response.main.humidity + '%' + '<br>' + ' Wind speed: ' + response.wind.speed + ' m/s');

    var marker = new mapboxgl.Marker({
      color: "#FF69B4",
      draggable: false,
      size: 'large'

    })
      .setLngLat([115.091949, -8.340539])
      .setPopup(popup)
      .addTo(map);

  });
}

getAPIdata4();


document.getElementById('knop1').onclick = function() {
map.flyTo({
center: [-80.52662, 28.45077],
speed: 1,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
};

document.getElementById('knop2').onclick = function() {
map.flyTo({
center: [4.325670, 51.850460],
speed: 1,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
};

document.getElementById('knop3').onclick = function() {
map.flyTo({
center: [36.548851, 56.375149],
speed: 1,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
};

document.getElementById('knop4').onclick = function() {
map.flyTo({
center: [115.091949, -8.340539],
speed: 1,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
};













