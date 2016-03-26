
var instagramPictures = new Array();


function refreshInstagram(){
	$.get("getInstagram.php").done(function(data){	
		instagramPictures = new Array();
    	var instagramData = jQuery.parseJSON(data);
		console.log("Amount of Instagrams: " + instagramData.length);  
	
		for (var i = 0; i < instagramData.length; i++) {
			console.log("adding instagram picture: "+i);
      		
			instagramPictures[i] =("<img src='" + instagramData[i].image +"' ></img><br/>"
				+"<div class='social_username'><img class='social_username' src=" + instagramData[i].profile_picture+ "></img>&nbsp; @"
				+ instagramData[i].user + "</div><br/>"
				+ instagramData[i].text);
    	}
	});
	
}


var currentInstagramPicture = 0;
function rotateInstagram() {
	if(instagramPictures.length > 0){ //added this as the instagram pictures may still be loading on first run
		console.log ("shown picture" + currentInstagramPicture + "of "+ instagramPictures.length);
   		$(".instagram_logo").show();
		$(".twitter_logo").hide();
   		$(".social").html(instagramPictures[currentInstagramPicture]);
    	currentInstagramPicture = (currentInstagramPicture==instagramPictures.length-1) ? 0 : currentInstagramPicture + 1;
    }
 
   
}

