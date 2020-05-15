<?php 
session_start();
if(!isset($_SESSION['id'])){
    header("HTTP/1.1 500 Internal Server Error");  
}else{
    print json_encode(array('success'=>'ok'));
}
?>