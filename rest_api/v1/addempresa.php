<?php

/*
 * 
 * By Edvan Macedo
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


$username = $_POST['nome'];

$endereco = $_POST['endereco'];

$telefone = $_POST['telefone'];


$db->begin();

$result1 = $db->insert_sql("INSERT INTO `empresa` (`nome`, `endereco`, `telefone`)
			VALUES ('".$username."', '".$endereco."', '".$telefone."');");


if ($result1) {
		$db->commit();		
		die(json_encode(Array("status" => "OK")));		
} else {
		$db->rollback();
		die(json_encode(Array("status" => "ERROR")));
}


?>
