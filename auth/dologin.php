<?php
include '../db/dbconnect.php';
header('Content-type: application/json');
session_start();

$nickname =  $_POST['nickname'];
$password = $_POST['password'];
$password = md5($password);

$sql = "SELECT id,nickname,password FROM users WHERE nickname = '$nickname' and password = '$password'";

$result = mysqli_query($mysqli,$sql);
$count = mysqli_num_rows($result);


if($count==1){

  while($row = $result->fetch_array()){
    $id = $row['id'];
  }

  $_SESSION['id'] = $id;


  
  print json_encode(array('success'=>'ok'));
  

} else{
        header("HTTP/1.1 500 Internal Server Error");  
}
?>