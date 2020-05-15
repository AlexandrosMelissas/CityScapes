<?php 
include '../db/dbconnect.php';
header('Content-type: application/json');

if(isset($_GET['nomos'])){
    $nomos = $_GET['nomos'];
}


$sql2 = "SELECT city_id,name_p,nomos,description,city_image_url,likes,comments FROM cities WHERE nomos='$nomos' ORDER BY name_p";

$query2 = mysqli_query($mysqli,$sql2);
print json_encode($query2->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);


?>