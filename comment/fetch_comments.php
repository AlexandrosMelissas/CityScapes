<?php 
include "db/dbconnect.php";
header('Content-type: application/json');
session_start();

$city_id = $_GET['id'];
$user_id = $_SESSION['id'];
$page = 0;
$record_per_page = 5; // Posa sxolia theloume na exei to kathe pagination

if(isset($_GET['page'])){

    $page = (int)$_GET['page'];   // Pairnoume thn selida poy pernietai san parametros apo thn function fetch_comments

}

$start_from = ($page - 1 ) * $record_per_page; // Apo pou na ksenisei na pairnei ta sxolia

$sql = "SELECT comments.comment_text,users.gender,users.nickname,comments.comment_id,comments.city_id,comments.date_created,users.id,comments.user_id FROM comments INNER JOIN users ON comments.user_id = users.id  WHERE comments.city_id='$city_id' ORDER BY comments.date_created DESC LIMIT $start_from,$record_per_page";
$result = mysqli_query($mysqli,$sql);

print json_encode($result->fetch_all(MYSQLI_ASSOC));

?>