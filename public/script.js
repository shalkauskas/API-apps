//jshint esversion:6

$(document).ready(function() {

  // Weather API
  let getWeather = (city) => {
    console.log("Getting weather from: ", city);
    let APIKey = 'ede7670e8ec9da1d4576253840298116';
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey,
      data: JSON,
      success: function(response) {
        var resultTemp = Math.floor(response.main.temp - 273.15);
        console.log(resultTemp);
      }
    });
  };

////////////////Functions///////////////
  // Default popup for unsued icons
  let popup = () => {
    if ($('img').hasClass('onclick')) {
      setTimeout(function() {
        alert('You have no permission to do this!');
      }, 200);
    }
  };
  function

  ////////////////////// Effect on icon click////////////////
  $('img').on('click', function() {
    let iconClass = this.id;
    let icons = ['my-computer', 'bin'];
    let matchCheck = icons.find(x => x == iconClass);
    // console.log(matchCheck);
    if (iconClass == matchCheck) {
      // Default behaivor (popup) for unused buttons
      $(this).addClass('onclick');
      popup();
      setTimeout(function() {
        $('img').removeClass('onclick');
      }, 600);




    }
    // Get ONLY location
    if (iconClass == 'napster') {
      $(this).addClass('onclick');
      setTimeout(function() {
        $('img').removeClass('onclick');
      }, 200);


      // Get weather based on location
    }
    if (iconClass == 'internet-explorer') {
      // Add clicked icon effect
      $(this).addClass('onclick');
      // Remove click effect
      setTimeout(function() {
        $('img').removeClass('onclick');
      }, 200);
      // Open window for city prompt
      $('#myModal').show('fast');
      // Close if clicked outside modal
      $(window).click(function(event) {
        if (event.target.id == "myModal") {
          $("#myModal").hide('fast');
        }
      });
      // Close button for window
      $("#close").on('click', (function() {
        $("#myModal").hide('fast');
      }));
      // Get temp for city on city sumbit
      $('#getTemp').on('click', function() {
        getWeather($("#city").val());
        $("#myModal").hide('fast');
      });
    }




  });



});
