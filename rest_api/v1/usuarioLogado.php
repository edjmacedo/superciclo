<?php

/*
 * Edvan Macedo
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

$returnActivity = Array();

$user = $_SESSION['loggeduser']['id'];

$result = $db->select('SELECT uid, nome, email, tipo FROM usuarios WHERE uid = "'.$user.'" ');
while($row = $db->get_row($result)){	
	array_push($returnActivity, $row);	
}

echo json_encode(Array("usuarios" => $returnActivity));

?>
