
$('.bxslider').bxSlider({
  adaptiveHeight: true,
  mode: 'fade'
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




$(document).ready(function(){
	
	$( document ).click(function() {
		$( "#toggle" ).toggle( "highlight" );
	});
	
	$( "#actionButton" ).click(function() {
		//alert("Here is some text!")
		$( "#book" ).slideToggle( "slow" );
		$("#actionButton").text("jQUERY VOO-DOO FOOL!!!!")
	});

});
