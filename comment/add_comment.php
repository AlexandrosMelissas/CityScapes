<?php 
include 'db/dbconnect.php';
session_start();

$comment = $_POST['comment'];
$user_id = $_SESSION['id'];
$city_id = $_POST['city_id'];

$sql1 = "INSERT INTO comments (`comment_text`,`city_id`,`user_id`) VALUES ('$comment','$city_id','".$_SESSION['id']."')";
$sql2 = "UPDATE cities SET comments = comments + 1 WHERE city_id = '$city_id'";
$query = mysqli_query($mysqli,$sql1);
$query2 = mysqli_query($mysqli,$sql2);
?>