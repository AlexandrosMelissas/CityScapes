<?php 
include 'db/dbconnect.php';
session_start();

$value = $_POST['value'];
$city_id = $_POST['id'];
$user_id = $_SESSION['id'];

if($value=='Like'){

$sql1 = "INSERT into likes (user_id,city_id) VALUES ('$user_id','$city_id')";
$sql2 = "UPDATE cities SET likes = likes + 1 WHERE city_id='$city_id'";
$query = mysqli_query($mysqli,$sql1);
$query = mysqli_query($mysqli,$sql2);

}else if($value=='Unlike'){
$sql3 = "DELETE FROM likes WHERE user_id='$user_id' AND city_id='$city_id'";
$sql4 = "UPDATE cities SET likes = likes - 1 WHERE city_id='$city_id'";
$query = mysqli_query($mysqli,$sql3);
$query = mysqli_query($mysqli,$sql4);
}
?>