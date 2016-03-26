<?php
	$directory = 'sponsors';
	$sponsors = array();
	
	$scanned_folder = scandir($directory);
	
	foreach($scanned_folder as $path){
		if ($path != '.' and $path != '..'){
			$sponsors[]= array("sponsor" => $path);
		}
	}
	
	echo json_encode($sponsors);
		
	
?>