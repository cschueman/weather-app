// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('img').attr('src', weather.image);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};

// 1. page load 2. store headers 3. ... x. Show header

// Store headers
var pun0 = 'Whats a sheeps favorite computer component? The RAM!';
var pun1 = 'Why did the sheep baaa? Because thats what noise they make';
var pun2 = 'What is a sheeps favorite newspaper? The Wool Street Journal';
var pun3 = 'Holy Sheep';
var pun4 = 'Ewe are so silly';

// Store & Generate Number
var maxRand = 5;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

//  Show headers
$('p').text( eval('pun' + randNum) );

