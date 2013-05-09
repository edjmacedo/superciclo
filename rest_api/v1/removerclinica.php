<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

include_once 'config.php';
include_once 'query.php';
include_once 'utils.php';
//include_once 'ftp.php';

//session_start();

$db = new db_class();
if (!$db->connect($CONFIG_host, $CONFIG_user, $CONFIG_pass, $CONFIG_db)) {
	$db->print_last_error();
}
if (!$db->select_db()){
	die("Banco de dados não encontrado!");
}


$accid = $_POST['clinid'];


$db->begin();
$result = $db->delete_sql("DELETE FROM clientes WHERE cid = $accid");

if ($result) {
    $db->commit();   
    die(json_encode(Array("status" => "OK")));
} else {
    $db->rollback();
    die(json_encode(Array("status" => "ERROR")));
}

?>
