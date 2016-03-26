<?php

function isBlocked($user){
		
		global $blocked_users; //blocked_user are defined in the file configuration.php
		return in_array($user, $blocked_users);
					
	}
?>