
var twitterPictures = new Array();

function refreshTwitter(){
	$.get("getTwitter.php").done(function(data){
        twitterPictures = new Array();
		var tweets = jQuery.parseJSON(data);
		console.log("Amount of tweets: " + tweets.length);  
  
        for (var i = 0; i < tweets.length ; i++){
    	 	console.log("adding twitter image: "+ i);
		 	twitterPictures[i] =( "<img src='" + tweets[i].image +"' ></img><br/>"
        		+"<div class='social_username'><img class='social_username' src=" + tweets[i].profile_picture+ "></img>&nbsp; @"
				+ tweets[i].user + "</div><br/>"
				+ tweets[i].text);
        }
	});
	
}

var currentTweet = 0;
function rotateTweet(){
	if(twitterPictures.length > 0){ //added this as the  pictures may still be loading on first run
		console.log ("shown tweet" + currentTweet + "of "+ twitterPictures.length);
   		$(".instagram_logo").hide();
		$(".twitter_logo").show();
   		$(".social").html(twitterPictures[currentTweet]);
    	currentTweet = (currentTweet==twitterPictures.length-1) ? 0 : currentTweet + 1;
    }
 
   
}
