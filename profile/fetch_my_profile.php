<?php 
include '../db/dbconnect.php';
header('Content-type: application/json');
session_start();
$id = $_SESSION['id'];

$sql = "SELECT * FROM users WHERE id='$id'";
$result = mysqli_query($mysqli,$sql);
print json_encode($result->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);

?>