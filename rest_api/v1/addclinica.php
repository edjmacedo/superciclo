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


$nome = $_POST['nome'];
$endereco = $_POST['endereco'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
//$file = $_POST['foto'];

//if (isset($file) && $file['size']!=0) {
  //Upload photo
  //$ftp = new ClsFTP($CONFIG_ftp_user, $CONFIG_ftp_pass, $CONFIG_ftp_host, $CONFIG_ftp_port);
  //$ftp->cd($CONFIG_ftp_dir.$CONFIG_image_path_events);
  //Nomear a foto
  //$photoname = time() .  $file;
  //Fazer upload  
  //if($ftp->put($photoname, $file['tmp_name'])){
	 //Gravar em banco
  $result1b = $db->insert_sql("INSERT INTO `clientes` (`nome`, `email`, `endereco`, `telefone`)
			VALUES ('".$nome."', '".$email."' ,'".$endereco."', '".$telefone."');");
  //$thumb = createThumbs($file['tmp_name'], 80, 80);
  //$ftp->put(str_replace("_n", "_t", $photoname), $thumb);
	 
  //}
//}

if ($result1b) {
		$db->commit();
		//die("<script>window.location='?page=profileevent&eveid=64'</script>");
		die(json_encode(Array("status" => "OK")));
		//die(json_encode(Array("event" => $result1)));
} else {
		$db->rollback();
		die(json_encode(Array("status" => "ERROR")));
}


?>
