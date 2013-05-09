<?php		  
include_once('api.php');
include_once 'config.php';
include_once 'query.php';
include_once 'utils.php';
//include_once 'ftp.php';
session_start();
$db = new db_class();
if (!$db->connect($CONFIG_host, $CONFIG_user, $CONFIG_pass, $CONFIG_db)) {
        $db->print_last_error();
}
if (!$db->select_db()){
        die("Banco de dados não encontrado!");
}

$username = $_POST['login'];
$senha = $_POST['senha'];

$result = $db->select("SELECT * FROM usuarios WHERE email='".$username."' 
				AND senha='".$senha."'");
$result = $db->get_row($result);
if ($result) {
	$_SESSION['loggeduser']['id'] = $result['uid'];	
	$_SESSION['loggeduser']['name'] = $result['nome'];
	$_SESSION['loggeduser']['email'] = $result['email'];
        $_SESSION['loggeduser']['tipo'] = $result['tipo'];
        $_SESSION['loggeduser']['empresa'] = $result['empresa'];
	
	$return = Array();
	array_push($return, $_SESSION['loggeduser']);
	Api::response($return);
} else {
	Api::error(401, "Authorization failed");
}


?>
