<?php

/*
 * Edvan Macedo
 * 
 */

include_once 'config.php';
include_once 'query.php';
include_once 'utils.php';
//include_once 'ftp.php';
include_once 'class.phpmailer.php';
//session_start();

$db = new db_class();
if (!$db->connect($CONFIG_host, $CONFIG_user, $CONFIG_pass, $CONFIG_db)) {
	$db->print_last_error();
}
if (!$db->select_db()){
	die("Banco de dados não encontrado!");
}

$eid = $_POST['eid'];
$status = $_POST['status'];

//Gravar em banco
$result1b = $db->update_sql("UPDATE  `encaminhamentos` SET status = '".$status."'
                            WHERE eid = '".$eid."';");

if ($result1b) {
		$db->commit();		
		die(json_encode(Array("status" => "OK")));		
} else {
		$db->rollback();
		die(json_encode(Array("status" => "ERROR")));
}


?>
