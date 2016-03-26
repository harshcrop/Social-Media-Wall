
<?php

/**This page wil return a json encoded list of tweets with a picture containing username, profilepicture, text and the image (in standard resolution). Unless the user is blocked **/
	
require_once 'emoji/emoji.php';
require_once 'configuration.php';
require_once 'getBlocked.php';
require_once 'twitter-api-php-master/TwitterAPIExchange.php';
 

$settings = array(
    'oauth_access_token' => $twitter_oauth_access_token,
    'oauth_access_token_secret' => $twitter_oauth_access_token_secret,
    'consumer_key' => $twitter_consumer_key,
    'consumer_secret' => $twitter_consumer_secret
);

$url = "https://api.twitter.com/1.1/search/tweets.json";
$requestMethod = "GET";
$getfield = '?q=%23'.$hashtag.'%20-RT&result_type=recent&count=100';


$twitter = new TwitterAPIExchange($settings);
$string = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(),$assoc = TRUE);

             
if($string["errors"][0]["message"] != "") {echo "<h3>Sorry, there was a problem.</h3><p>Twitter returned the following error message:</p><p><em>".$string[errors][0]["message"]."</em></p>";exit();}             


$image_tweets = Array();
foreach($string{"statuses"} as $tweet	) {
	if(!isBlocked($tweet{"user"}{"name"})){
    	$image = $tweet{"entities"}{"media"}[0]{"media_url"};
	 		 		
     	if(strlen ($image) > 0 ){
     		$image_tweets[] = array("user" => $tweet{"user"}{"name"},
     								"profile_picture" => $tweet{"user"}{"profile_image_url"},
									"text" => emoji_unified_to_html($tweet{"text"}),
									"image" => $image);
		}
		if(sizeof($image_tweets) == $maxAmount){
				break;
		}
	}         
}

echo json_encode($image_tweets);

?>