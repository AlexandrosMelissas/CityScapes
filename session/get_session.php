<?php 
session_start();
$user_id = (int)$_SESSION['id'];



print json_encode($user_id);


?>