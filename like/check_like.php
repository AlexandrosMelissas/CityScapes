<?php 
include 'db/dbconnect.php';
header('Content-type: application/json');
session_start();

$user_id = $_SESSION['id'];
$city_id = $_GET['id'];

$sql = "SELECT COUNT(*) AS count FROM likes WHERE user_id='$user_id' AND city_id='$city_id'";
$result = mysqli_query($mysqli,$sql);
$data = mysqli_fetch_assoc($result);

if($data['count']=='0'){
    
    header("HTTP/1.1 500 Internal Server Error");  


}else {
    print json_encode(array('success'=>'yes_like'));


}

?>