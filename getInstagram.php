<?php
/**This page wil return a json encoded list of instagram pictures containing username, profilepicture, text and the image (in standard resolution). Unless the user is blocked **/
	
require_once 'emoji/emoji.php';
require_once 'configuration.php';
require_once 'getBlocked.php';

$json = file_get_contents('https://api.instagram.com/v1/tags/'.$hashtag.'/media/recent?access_token='.$instagram_access_token);
$obj = json_decode($json, true);


foreach($obj{'data'} as $instagram	){
	
	if(!isBlocked($instagram{'user'}{'username'})){
		$instagramList[] = array("user" => $instagram{'user'}{'username'},
     									"profile_picture" => $instagram{'user'}{'profile_picture'},
										"text" => emoji_unified_to_html($instagram{'caption'}{'text'}),
										"image" => $instagram{'images'}{'standard_resolution'}{'url'});
	
	
	    if(sizeof($instagramList) == $maxAmount){
			break;
		}
	}	
}

echo json_encode($instagramList);



?>
