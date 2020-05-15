<?php 
require 'db/dbconnect.php';
session_start();
if(isset($_GET['city_id'])){

$city_id = $_GET['city_id'];


$sql = "SELECT COUNT(comment_id) AS total_pages FROM comments WHERE city_id='$city_id'";
$query = mysqli_query($mysqli,$sql);
$result = mysqli_fetch_array($query);

print ceil($result['total_pages']/5);
}else {
    if(isset($_GET['user_id'])){
        $user_id = $_GET['user_id'];

        $sql2 = "SELECT COUNT(comment_id) AS total_pages FROM comments WHERE user_id='$user_id'";
        $query2 = mysqli_query($mysqli,$sql2);
        $result2 = mysqli_fetch_array($query2);
        print ceil($result2['total_pages']/5);

    }
}













?>