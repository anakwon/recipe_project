<?php

define('fromData',true);

if(empty($_GET["action"])/* check if the get superglobal variable 'action' is empty*/){
	exit('no action specified');
};

$output = [
	'success'=> false, //we assume we will fail
	'errors'=>[]
];

switch($_GET["action"]/*do a comparison switch on the get superglobal action*/){
	case 'searchAll':
		//include the php file 'read.php'
		include('dataApi/search-recipes.php');
		break;
	case 'getRecipe':
		//include the php file insert.php
		include('dataApi/get-single-recipe.php');
		break;

};

//convert the $output variable to json, store the result in $outputJSON
$json_output = json_encode($output);
print_r($json_output);
//end

?>