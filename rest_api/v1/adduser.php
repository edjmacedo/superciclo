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

$email = $_POST['email'];

$senha = $_POST['senha'];

$empresa = $_POST['empresa'];

$usertype = $_POST['usertype'];


$db->begin();

$result1 = $db->insert_sql("INSERT INTO `usuarios` (`nome`, `email`, `senha`, `empresa`, `tipo`)
			VALUES ('".$username."', '".$email."', '".$senha."', '".$empresa."' ,'".$usertype."');");


if ($result1) {
		$db->commit();
		//die("<script>window.location='?page=profileevent&eveid=64'</script>");
		die(json_encode(Array("status" => "OK")));
		//die(json_encode(Array("event" => $result1)));
} else {
		$db->rollback();
		die(json_encode(Array("status" => "ERROR")));
}


?>
