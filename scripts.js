//for scrolling effects from the ScrollMagic Plugin jQuery UI
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
	duration: 100, // the scene should last for a scroll distance of 100px
	offset: 50, // start this scene after scrolling for 50px
})
	.setPin('#my-sticky-element') // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller

//customize the radio buttons in the form with jQuery
$( function() {
    $( "input[type=radio]" ).checkboxradio({
      icon: false
    });
} );

//for the color slider section
$( function() {
    //variable to hold the document root to allow us to edit the CSS on the page later with variables
    let root = document.documentElement;

    //translates the RGB values from the sliders to hex values
    function hexFromRGB(r, g, b) {
      var hex = [
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
        
    });
} );
