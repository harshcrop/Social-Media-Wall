

var sponsorImages = new Array();

$.get("getSponsors.php").done(function(data){	
	var sponsors = jQuery.parseJSON(data);	

	for(var i = 0; i < sponsors.length; i++){
		sponsorImages[i]="<img alt='image"+i+"' src='sponsors/"+sponsors[i].sponsor+"' border='0' />"
	}
});


var current = 0; //start the counter at 0  
function rotateSponsor() {
    $(".sponsor_image").html(sponsorImages[current]);

    current = (current==sponsorImages.length-1) ? 0 : current + 1; //increment or reset
   
}

