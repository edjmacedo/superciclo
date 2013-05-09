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

$returnActivity = Array();
$result = $db -> select("SELECT encaminhamentos.eid, encaminhamentos.identificacao, encaminhamentos.nome, 
                    encaminhamentos.celular, encaminhamentos.empresa, encaminhamentos.cargo, encaminhamentos.data,
                    encaminhamentos.rg, encaminhamentos.dt_nascimento, encaminhamentos.aso, encaminhamentos.audiometria, 
                    encaminhamentos.hemograma, encaminhamentos.eas, encaminhamentos.epf, encaminhamentos.vdrl, encaminhamentos.glicose,
                    encaminhamentos.betahcg, encaminhamentos.dosagem, encaminhamentos.colesterol, encaminhamentos.triglicerideos, 
                    encaminhamentos.raiox, encaminhamentos.vectoeletro, encaminhamentos.tipagem, encaminhamentos.tgo, 
                    encaminhamentos.espirometria, encaminhamentos.eletroencefalo, encaminhamentos.eletrocardio, encaminhamentos.clinica,
                    encaminhamentos.observacao
		FROM encaminhamentos WHERE encaminhamentos.eid = '".$eid."'");

while($row = $db -> get_row($result)) {		
	array_push($returnActivity, $row);
}

$result = $db->select('SELECT cid, nome, endereco, telefone FROM clientes');
while($row = $db->get_row($result)){	
	array_push($returnActivity, $row);	
}

echo json_encode(Array("encaminhamento" => $returnActivity));



?>
