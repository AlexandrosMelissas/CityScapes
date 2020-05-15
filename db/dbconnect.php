<?php 

$host = 'localhost';
$user = 'root';


if(gethostname()=='users.iee.ihu.gr') {
    $db = 'city_scapes_db';
    $pass = 'root';
    $mysqli = new mysqli($host, $user, $pass, $db, null, 'home/student/it/2015/it154582/mysql/run/mysql.sock')
} else {
    $db = 'db_table';
    $pass = '';
    $mysqli = new mysqli($host,$user,$pass,$db);
}


?>