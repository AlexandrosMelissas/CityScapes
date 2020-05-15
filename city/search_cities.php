<?php 
require 'db/dbconnect.php';
header('Content-type: application/json');

$search = mysqli_real_escape_string($mysqli,$_GET['search']);

$sql = "SELECT * FROM cities WHERE name_p LIKE '".$search."%' ORDER BY name_p";

$result = mysqli_query($mysqli,$sql);

if(mysqli_num_rows($result)==0){

    header("HTTP/1.1 500 Internal Server Error");  
}else {
    print json_encode($result->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
}

?>
