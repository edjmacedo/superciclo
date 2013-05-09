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

session_start();

$db = new db_class();
if (!$db->connect($CONFIG_host, $CONFIG_user, $CONFIG_pass, $CONFIG_db)) {
	$db->print_last_error();
}
if (!$db->select_db()){
	die("Banco de dados não encontrado!");
}

$clinica = $_POST['clinica'];
$identificacao = $_POST['identificacao'];
$nome = $_POST['nome'];
$celular = $_POST['celular'];
$empresa = $_SESSION['loggeduser']['empresa'];
$cargo = $_POST['cargo'];
$dtencaminhamento = $_POST['dtencaminhamento'];
$rg = $_POST['rg'];
$dtnascimento = $_POST['dtnascimento'];
$aso = $_POST['aso'];
$colesterol = $_POST['colesterol'];
$audiometria = $_POST['audiometria'];
$triglicerideos = $_POST['triglicerideos'];
$hemograma = $_POST['hemograma'];
$raiox = $_POST['raiox'];
$vecto = $_POST['vecto'];
$epf = $_POST['epf'];
$tipagem = $_POST['tipagem'];
$vdrl = $_POST['vdrl'];
$tgo = $_POST['tgo'];
$glicose = $_POST['glicose'];
$espiro = $_POST['espiro'];
$beta = $_POST['beta'];
$eletro = $_POST['eletro'];
$dosagem = $_POST['dosagem'];
$cardio = $_POST['cardio'];
$eas = $_POST['eas'];
$observacao = $_POST['observacao'];

//Gravar em banco
$result1b = $db->insert_sql("INSERT INTO `encaminhamentos` (`identificacao`, `nome`, `celular`, `empresa`, `cargo`, `data`,
                        `rg`, `dt_nascimento`, `aso`, `audiometria`, `hemograma`, `eas`, `epf`, `vdrl`, `glicose`, `betahcg`,
                        `dosagem`, `colesterol`, `triglicerideos`, `raiox`, `vectoeletro`, `tipagem`, `tgo`, `espirometria`,
                        `eletroencefalo`, `eletrocardio`, `status`, `clinica`, `observacao`)
			VALUES ('".$identificacao."', '".$nome."', '".$celular."', '".$empresa."', '".$cargo."', '".$dtencaminhamento."',
                             '".$rg."', '".$dtnascimento."', '".$aso."', '".$audiometria."', '".$hemograma."', '".$eas."', '".$epf."', '".$vdrl."', '".$glicose."', '".$beta."',
                             '".$dosagem."', '".$colesterol."', '".$triglicerideos."', '".$raiox."', '".$vecto."', '".$tipagem."', '".$tgo."', '".$espiro."',
                             '".$eletro."', '".$cardio."', 'aberta', '".$clinica."', '".$observacao."');");  

if ($result1b) {
		$db->commit();		
		die(json_encode(Array("status" => "OK")));		
} else {
		$db->rollback();
		die(json_encode(Array("status" => "ERROR")));
}


?>
