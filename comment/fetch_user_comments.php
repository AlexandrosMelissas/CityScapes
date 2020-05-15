<?php 
include '../db/dbconnect.php';
header('Content-type: application/json');

$id = $_GET['id'];

$page = 0;
$record_per_page = 5; // Posa sxolia theloume na exei to kathe pagination

if(isset($_GET['page'])){

    $page = (int)$_GET['page'];   // Pairnoume thn selida poy pernietai san parametros apo thn function fetch_comments

}

$start_from = ($page - 1 ) * $record_per_page; // Apo pou na ksenisei na pairnei ta sxolia

$sql = "SELECT comments.comment_text,comments.city_id,comments.date_created,users.nickname,users.id,cities.name_p FROM 
comments INNER JOIN users ON comments.user_id = users.id 
INNER JOIN cities ON comments.city_id = cities.city_id  
WHERE comments.user_id = '$id' ORDER BY  comments.date_created DESC LIMIT $start_from,$record_per_page";
$result = mysqli_query($mysqli,$sql);

print json_encode($result->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);

?>