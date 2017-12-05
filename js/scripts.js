$.simpleWeather({
    location: 99203,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
      $('.thumbnail').attr('src', weather.image);
      // icon
      var iconCode = 'wi wi-yahoo-' + weather.code;
      $('i').attr('class', iconCode );
      
      // Conditions
      // if ( weather.code >= 26 && weather.code <= 30  ) {
      //   $('body').addClass('cloudy');    
      // }
      
      // Forecast
      $('#forecast tr:nth-child(1) .day').text(weather.forecast[1].day);
      $('#forecast tr:nth-child(2) .day').text(weather.forecast[2].day);
      $('#forecast tr:nth-child(3) .day').text(weather.forecast[3].day);
      
      $('#forecast tr:nth-child(1) .high').text(weather.forecast[1].high);
      $('#forecast tr:nth-child(2) .high').text(weather.forecast[2].high);
      $('#forecast tr:nth-child(3) .high').text(weather.forecast[3].high);
      
      $('#forecast tr:nth-child(1) .low').text(weather.forecast[1].low);
      $('#forecast tr:nth-child(2) .low').text(weather.forecast[2].low);
      $('#forecast tr:nth-child(3) .low').text(weather.forecast[3].low);
      
      // Icon
      var dayOneIcon = 'wi wi-yahoo-' + weather.forecast[1].code;
      var dayTwoIcon = 'wi wi-yahoo-' + weather.forecast[2].code;
      var dayThreeIcon = 'wi wi-yahoo-' + weather.forecast[3].code;
        
      $('#forecast tr:nth-child(1) i').attr('class', dayOneIcon );
      $('#forecast tr:nth-child(2) i').attr('class', dayTwoIcon );
      $('#forecast tr:nth-child(3) i').attr('class', dayThreeIcon );
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

