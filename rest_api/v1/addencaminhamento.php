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


$result = $db->select('SELECT email FROM clientes WHERE cid = "'.$clinica.'" ');
$row = $db->get_row($result);

//Tratamento de exames
if($aso == "true"){
	$aso = "ASO - EXAME CLÍNICO";
}else{
	$aso = "";
}
if($colesterol == "true"){
	$colesterol = "COLESTEROL ";
}else{
	$colesterol = "";
}
if($audiometria == "true"){
	$audiometria = "AUDIOMETRIA";
}else{
	$audiometria = "";
}
if($triglicerideos == "true"){
	$triglicerideos = "TRIGLICERÍDEOS";
}else{
	$triglicerideos = "";
}
if($hemograma == "true"){
	$hemograma = "HEMOGRAMA";
}else{
	$hemograma = "";
}
if($raiox == "true"){
	$raiox = "RAIO X COLUNA CERVICAL LOMBO SACRA";
}else{
	$raiox = "";
}
if($vecto == "true"){
	$vecto = "VECTOELETRONISTAGMOGRAFIA";
}else{
	$vecto = "";
}
if($epf == "true"){
	$epf = "EPF - FEZES";
}else{
	$epf = "";
}
if($tipagem == "true"){
	$tipagem = "TIPAGEM SANGUINEA";
}else{
	$tipagem = "";
}
if($vdrl == "true"){
	$vdrl = "VDRL";
}else{
	$vdrl = "";
}
if($tgo == "true"){
	$tgo = "TGO/TGP";
}else{
	$tgo = "";
}
if($glicose == "true"){
	$glicose = "GLICOSE";
}else{
	$glicose = "";
}
if($espiro == "true"){
	$espiro = "ESPIROMETRIA";
}else{
	$espiro = "";
}
if($beta == "true"){
	$beta = "BETA HCG";
}else{
	$beta = "";
}
if($eletro == "true"){
	$eletro = "ELETROENCEFALOGRAMA";
}else{
	$eletro = "";
}
if($dosagem == "true"){
	$dosagem = "DOSAGEM";
}else{
	$dosagem = "";
}
if($cardio == "true"){
	$cardio = "ELETROCARDIOGRAMA";
}else{
	$cardio = "";
}
if($eas == "true"){
	$eas = "EAS - URINA";
}else{
	$eas = "";
}

/*$mail = new PHPMailer();
  
$mail->IsSMTP();
$mail->SMTPSecure = "ssl"; // set mailer to use SMTP
$mail->Host = "smtp.gmail.com";  // specify main and backup server
$mail->SMTPAuth = true; // turn on SMTP authentication
$mail->Port = 465; 
$mail->Username = "consultoriaocupacional2@gmail.com";  // SMTP username
$mail->Password = "novaera2012"; // SMTP password
$mail->From = $row['email'];
$mail->FromName = "Novo Encaminhamento: ".$empresa;
$mail->AddAddress($row['email']);
$mail->IsHTML(true);

  
$mail->Subject = "Cadastro de encaminhamento da empresa: ".$empresa;
$mail->Body    = "<br/><h3> Novo encaminhamento cadastrado via consultoriasuperciclo </h3><br/>
					<h4>Tipo: ".$identificacao."</h4><br/>
					<h4>Nome: ".$nome."</h4><br/>
					<h4>Exames: ".$aso."&nbsp;".$colesterol."&nbsp;".$colesterol."&nbsp;".$audiometria."&nbsp;".$triglicerideos."
					&nbsp;".$hemograma."&nbsp;".$raiox."&nbsp;".$vecto."&nbsp;".$epf."&nbsp;".$tipagem."&nbsp;".$vdrl."
					&nbsp;".$tgo."&nbsp;".$glicose."&nbsp;".$espiro."&nbsp;".$beta."&nbsp;".$eletro."&nbsp;".$dosagem."
					&nbsp;".$cardio."&nbsp;".$eas."</h4>
					Acompanhe via: <a href='www.consultoriaocupacional.com.br/index.php?page=meusEncaminhamentos'>Meus Encaminhamentos</a>";
  
if(!$mail->Send()) {
    echo "Message could not be sent. <p>";
    echo "Mailer Error: " . $mail->ErrorInfo;
    die(json_encode(Array("status" => "ERROR")));
    exit;
}else{
    die(json_encode(Array("status" => "OK")));
    exit;
}*/

if ($result1b) {
		$db->commit();		
		die(json_encode(Array("status" => "OK")));		
} else {
		$db->rollback();
		die(json_encode(Array("status" => "ERROR")));
}


?>
