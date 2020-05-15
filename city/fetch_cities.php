<?php 
include 'db/dbconnect.php';
header('Content-type: application/json');

$sql = 'SELECT city_id,name_p,nomos,description,city_image_url,likes,comments FROM cities ORDER BY likes DESC,name_p LIMIT 10';

 $query = mysqli_query($mysqli,$sql);
 print json_encode($query->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);

?>