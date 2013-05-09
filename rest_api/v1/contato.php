<?php		  

//$data = $POST_data;
include_once 'class.phpmailer.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

		
$mail = new PHPMailer();
  
$mail->IsSMTP();
$mail->SMTPSecure = "ssl"; // set mailer to use SMTP
$mail->Host = "smtp.gmail.com";  // specify main and backup server
$mail->SMTPAuth = true; // turn on SMTP authentication
$mail->Port = 465; 
$mail->Username = "consultoriaocupacional2@gmail.com";  // SMTP username
$mail->Password = "novaera2012"; // SMTP password
$mail->From = $email;
$mail->FromName = "Contato do Cliente: ".$nome;
$mail->AddAddress("consultoriaocupacional2@gmail.com");
$mail->IsHTML(true);
  
$mail->Subject = "Contato do cliente: ".$nome;;
$mail->Body    = $mensagem."<br/><h3> E-mail do cliente: ".$email."</h3>";
  
if(!$mail->Send()) {
    echo "Message could not be sent. <p>";
    echo "Mailer Error: " . $mail->ErrorInfo;
    die(json_encode(Array("status" => "ERROR")));
    exit;
}else{
    die(json_encode(Array("status" => "OK")));
    exit;
}


?>
