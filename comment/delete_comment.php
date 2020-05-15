<?php 
require 'db/dbconnect.php';

$comment_id = $_GET['comment_id'];
$city_id = $_GET['city_id'];

$sql1 = "DELETE FROM comments WHERE comment_id = '$comment_id'";
$sql2 = "UPDATE cities SET comments = comments - 1 WHERE city_id='$city_id'";
$query = mysqli_query($mysqli,$sql1);
$query2 = mysqli_query($mysqli,$sql2);

?>