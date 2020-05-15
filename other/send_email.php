<?php 
require '../db/dbconnect.php';
require 'php-mailer/class.phpmailer.php';
require 'php-mailer/class.smtp.php';
require 'php-mailer/PHPMailerAutoload.php';
session_start();


$user_id = $_SESSION['id'];
$message = $_POST['message'];

$sql = "SELECT * from users WHERE id = '$user_id'";
$query = mysqli_query($mysqli,$sql);
$result = mysqli_fetch_assoc($query);

$name = $result['name'];
$surname = $result['surname'];
// email tou xrhsth
$email = $result['email'];


// metablhth email gia na arxikopoihsoume to PHPMailer
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                    
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'cityscapesproject@gmail.com';                    
    $mail->Password   = 'cityscapesproject123';                               
    $mail->SMTPSecure = 'tls';      
    $mail->Port       = 587;                                    

    //Recipients
    $mail->setFrom($email,$name);
    $mail->addAddress('cityscapesproject@gmail.com');    
    $mail->addReplyTo($email,$name);
    // Content
    $mail->isHTML(true);                                 
    $mail->Subject = "New Message from $name $surname";
    $mail->Body    = $message;
    $mail->AltBody = $message;

    $mail->send();
    echo 'Success';
} catch (Exception $e) {
    echo "Failure";
}

?>