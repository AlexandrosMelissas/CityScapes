<?php 

$host = 'localhost';
$user = 'root';
$db = 'city_scapes_db';
$pass = 'root';

$mysqli = new mysqli($host, $user, $pass, $db, null, 'home/student/it/2015/it154582/mysql/run/mysql.sock')


if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ")" . $mysqli -> connect_error;
}





?>