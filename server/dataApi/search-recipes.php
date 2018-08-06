<?php

require_once './unirest-php/src/Unirest.php';

// //check if you have all the data you need from the client-side call.  
// //if not, add an appropriate error to errors
if(empty($_GET['first']) || empty($_GET['second']) || empty($_GET['third'])){
	$output['errors'][] = "Missing required data";
	exit('missing data');
};

$firstIngredient = stripslashes($_GET['first']);
$secondIngredient = stripslashes($_GET['second']);
$thirdIngredient = stripslashes($_GET['third']);

//write a query that selects all the students from the database, all the data from each row
$url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=true&ingredients=".$firstIngredient."%2C+".$secondIngredient."%2C".$thirdIngredient."&limitLicense=false&number=5&ranking=1";

// curl_init

$response = Unirest\Request::get($url,
  array(
    "X-Mashape-Key" => "0qkIOtWV1YmshLU0rEVuYLFEEhF5p11cLkvjsnBTUaEIxLYDny",
    "Accept" => "application/json"
  )
);

// print_r ($response->raw_body);
$recipeArray = json_decode($response->raw_body, true); // Where variable $huge holds your JSON string.

// echo count($recipeArray);

$output = [ 'success' => false,
			'recipes' => [],
			'errors' => []
		];

//check if any data came back
if($response->code === 200){  
	//request is working
	if( $recipeArray > 0 ){
		//request returned data
		//if it did, change output success to true
		$output['success'] = true;
		//do a while loop to collect all the data 
		// while( $row = $response->fetch_assoc() ){
		// 	//add each row of data to the $output['studentData'] array
		// 	$output['recipes'][]= $row;
		// }
		$output['recipes']= $recipeArray;

	}
	else{
		//if not, add to the errors: 'no data'
		$output['errors'][] = "No data available";
	}
}
else{ 
	//add to errors
	$output['errors'][] = "Error with request";
}

?>