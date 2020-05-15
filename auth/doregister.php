<?php
include '../db/dbconnect.php';


$name = mysqli_real_escape_string($mysqli,$_POST['name']);
$pass1= mysqli_real_escape_string($mysqli,$_POST['pass1']);
$pass2 = mysqli_real_escape_string($mysqli,$_POST['pass2']);
$surname = mysqli_real_escape_string($mysqli,$_POST['surname']);
$nickname = mysqli_real_escape_string($mysqli,$_POST['nickname']);
$age = mysqli_real_escape_string($mysqli,$_POST['age']);
$email = mysqli_real_escape_string($mysqli,$_POST['email']);
$gender = $_POST['gender'];
$pass1 = md5($pass1);

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['email_check']) && $_POST['email_check'] == 1) {

	// validate email

	

	$sqlcheck = "SELECT email FROM users WHERE email = '$email' ";

	$checkResult = $mysqli->query($sqlcheck);

	// check if email already taken
	if(mysqli_num_rows($checkResult) > 0) {
		header("HTTP/1.1 500 Internal Server Error");
	}
}


 $sql ="INSERT INTO `users`(`name`,`surname`,`nickname`,`password`,`age`,`email`,`id`,`gender`) VALUES ('$name','$surname','$nickname','$pass1',$age,'$email','','$gender')";
 mysqli_query($mysqli,$sql);

?>