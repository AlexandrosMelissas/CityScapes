<?php 

$host = 'localhost';
$user = 'root';
$db = 'city_scapes_db';
$pass = 'root';
$mysqli = null

global $mysqli;

if(gethostname()=='users.iee.ihu.gr'){
    $mysqli = new mysqli($host, $user, $pass, $db, null, '/home/student/it/2015/it154582/mysql/run/mysql.sock')
} else {
    $mysqli = new mysqli($host,$user,'','db_table')
}

?>