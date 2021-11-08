//creates jQuery elements on page load
$( function() {
  //adds the accordion styles/jQuery to the page
  $( "#jobHistory" ).accordion();

  //create the tabs in the portfolio section
  $( "#portfolio" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#portfolio li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

  //customize the radio buttons in the form with jQuery
  $( "input[type=radio]" ).checkboxradio({
    icon: false
  });

  //for scrolling effects from the ScrollMagic Plugin jQuery UI
  // init controller
  let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "100%"
    }
  });

  //if we're on a desktop width screen, add the scroll magic plugin functionality
  if(window.innerWidth > 1000){
    //get all of the outer sections in the main
    let sections = $(".panel");
    //create a scene for each panel/section
    for(let i = 0; i < sections.length; i++){
      new ScrollMagic.Scene({
        triggerElement: sections[i],
        duration: 400
      })
      .setPin(sections[i], {pushFollowers: false})
      .addTo(controller);
    }
  }
} );


//for the color slider section
$( function() {
    //variable to hold the document root to allow us to edit the CSS on the page later with variables
    let root = document.documentElement;

    //variable to hold the nex code
    let hex = "";

    //translates the RGB values from the sliders to hex values
    function hexFromRGB(r, g, b) {
      hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];

      //creates a hex version of the color from the sliders that is added to the background of the swatch div
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }

    //updates the color in the swatch div
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    //creates the sliders
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 94 );
    $( "#green" ).slider( "value", 138 );
    $( "#blue" ).slider( "value", 193 );

    //event handler to swap page color on form submit/button click
    $("#changeColor").on("click", function(e){
        e.preventDefault();
        //figure out which of the colors the user wants to change
        let currentColor = $("input[type=radio]:checked").attr('id');
        console.log(currentColor);

        //convert the current color into one that looks like the variable name int the stylesheet
        let colorToChange = `--${currentColor}`;
        console.log(colorToChange);
        let newColor = `#${hex[0]}${hex[1]}${hex[2]}`;
        console.log(newColor);

        //use hex value chosen by the user for the color, and set it in the root of the CSS
        root.style.setProperty(colorToChange, newColor);
    });
} );
