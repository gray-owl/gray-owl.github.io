$(document).ready(function(){
	/*$('.bxslider').bxSlider({
  		adaptiveHeight: true,
  		mode: 'fade'
	});*/
	$('.bxslider').bxSlider({
		mode: 'fade',
  		auto: true,
  		autoControls: true,
  		pause: 2000
	});

	$( document ).click(function() {
		$( "#toggle" ).toggle( "highlight" );
	});
	$( "#actionButton" ).click(function() {
		//alert("Here is some text!")
		$( "#book" ).slideToggle( "slow" );
		$("#actionButton").text("jQUERY VOO-DOO FOOL!!!!")
	});

});


function myFunction() {
    document.getElementById("demo").style.color = "red";
    //document.getElementById("txtOne").value = "Chicken Pot Pie"
    alert(document.getElementById("txtOne").value);
}



/*$(document).click(function () {
      $("#toggle").effect("highlight", {}, 3000);
});
*/





