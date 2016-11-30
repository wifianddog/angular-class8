<?php
	if($_GET['username']=="abc"&&$_GET['password']==123){
		echo json_encode(array("status"=>"success","code"=>1));
	}else{
		echo json_encode(array("status"=>"failure","code"=>0));
	};
?>

