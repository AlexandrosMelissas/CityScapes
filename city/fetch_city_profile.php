<?php 
include '../db/dbconnect.php';
header('Content-type: application/json');

$id = $_GET['id'];

$sql = "SELECT city_id,name_p,nomos,description,city_image_url,likes FROM cities WHERE city_id='$id'";

$result = mysqli_query($mysqli,$sql);

print json_encode($result->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);

?>