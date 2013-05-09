<?php
 
function stringSearch($str) {
	//Transformando tudo em minúsculas
	$str = trim(strtolower($str));

	//Tirando espaços extras da string... "tarcila  almeida" ou "tarcila   almeida" viram "tarcila almeida"
	while ( strpos($str,"  ") )
		$str = str_replace("  "," ",$str);
	
	//Agora, vamos trocar os caracteres perigosos "ã,á..." por coisas limpas "a"
	$caracteresPerigosos = array ("Ã","ã","Õ","õ","á","Á","é","É","í","Í","ó","Ó","ú","Ú","ç","Ç","à","À","è","È","ì","Ì","ò","Ò","ù","Ù","ä","Ä","ë","Ë","ï","Ï","ö","Ö","ü","Ü","Â","Ê","Î","Ô","Û","â","ê","î","ô","û","!","?",",","","","-","\"","\\","/");
	$caracteresLimpos    = array ("a","a","o","o","a","a","e","e","i","i","o","o","u","u","c","c","a","a","e","e","i","i","o","o","u","u","a","a","e","e","i","i","o","o","u","u","A","E","I","O","U","a","e","i","o","u",".",".",".",".",".",".","." ,"." ,".");
	$str = str_replace($caracteresPerigosos,$caracteresLimpos,$str);
	
	//Agora que não temos mais nenhum acento em nossa string, e estamos com ela toda em "lower",
	//vamos montar a expressão regular para o MySQL
	$caractresSimples = array("a","e","i","o","u","c");
	$caractresEnvelopados = array("[a]","[e]","[i]","[o]","[u]","[c]");
	$str = str_replace($caractresSimples,$caractresEnvelopados,$str);
	$caracteresParaRegExp = array(
		"(a|ã|á|à|ä|â|&atilde;|&aacute;|&agrave;|&auml;|&acirc;|Ã|Á|À|Ä|Â|&Atilde;|&Aacute;|&Agrave;|&Auml;|&Acirc;)",
		"(e|é|è|ë|ê|&eacute;|&egrave;|&euml;|&ecirc;|É|È|Ë|Ê|&Eacute;|&Egrave;|&Euml;|&Ecirc;)",
		"(i|í|ì|ï|î|&iacute;|&igrave;|&iuml;|&icirc;|Í|Ì|Ï|Î|&Iacute;|&Igrave;|&Iuml;|&Icirc;)",
		"(o|õ|ó|ò|ö|ô|&otilde;|&oacute;|&ograve;|&ouml;|&ocirc;|Õ|Ó|Ò|Ö|Ô|&Otilde;|&Oacute;|&Ograve;|&Ouml;|&Ocirc;)",
		"(u|ú|ù|ü|û|&uacute;|&ugrave;|&uuml;|&ucirc;|Ú|Ù|Ü|Û|&Uacute;|&Ugrave;|&Uuml;|&Ucirc;)",
		"(c|ç|Ç|&ccedil;|&Ccedil;)" );
	$str = str_replace($caractresEnvelopados,$caracteresParaRegExp,$str);
	
	//Trocando espaços por .*
	$str = str_replace(" ",".*",$str);
	
	//Retornando a String finalizada!
	return $str;
}
function age($aniver){  
    list($ano, $mes, $dia) = explode("-", $aniver);  
  
    $ano_diff  = date("Y") - $ano;  
    $mes_diff = date("m") - $mes;  
    $dia_diff   = date("d") - $dia;  
  
    if ($dia_diff < 0 || $mes_diff < 0)  
        $ano_diff--;  
    return $ano_diff;  
}  

function check_email_address($email) {
    if (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", $email)) {
        return false;
    } else {
        return true;
    }
}

function createRandomKey($amount){
    $keyset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $randkey = "";
    for ($i=0; $i<$amount; $i++) {
      if ($i % 4 == 0 && $i > 0) {
        $randkey .= "-";
      }
      $randkey .= substr($keyset, rand(0, strlen($keyset)-1), 1);
    }
    return $randkey;
}
//Display error messages
// message - The message to be displayed
// action - The page that will be sent to, if unset, browser will do a back action
function error($message, $action = null) {
  echo "<script>
        $(document).ready(function() {
            wtd.alert.showMessage('".$message."', {
                 callback: function() {
        ";
        if ($action) {
          echo "window.location='".$action."';";
        } else {
          echo "history.go(-1);";
        }
        echo "
                 }
             });
        });
        </script>";  
}
function redimensiona($filename, $tmpname, $xmax = 160, $ymax = 160) {
    $ext = explode(".", $filename);       
    $ext = $ext[count($ext)-1];
    if($ext == "jpg" || $ext == "jpeg")
        $im = imagecreatefromjpeg($tmpname);
    elseif($ext == "png")
        $im = imagecreatefrompng($tmpname);
    elseif($ext == "gif")
        $im = imagecreatefromgif($tmpname);
    $x = imagesx($im);
    $y = imagesy($im);
    if($x <= $xmax && $y <= $ymax)
        return $im;
    if($x >= $y) {
        $newx = $xmax;
        $newy = $newx * $y / $x;
    }
    else {
        $newy = $ymax;
        $newx = $x / $y * $newy;
    }
    $im2 = imagecreatetruecolor($newx, $newy);
    imagecopyresized($im2, $im, 0, 0, 0, 0, floor($newx), floor($newy), $x, $y);
    return $im2;
}

function urlimage($photo, $type){
	include('config.php');
	$url = $CONFIG_image_host;
	switch ($type){
		default:
		case "user":
			$url .= $CONFIG_image_path_user.$photo;
			break; 
		case "places":
			$url .= $CONFIG_image_path_places.$photo;
			break;
		case "events":
			$url .= $CONFIG_image_path_events.$photo;
			break;
		case "gallery":
			$url .= $CONFIG_image_path_gallery.$photo;
			break;
	}
	if($photo == ""){
			$url = "images/fotoperfil.png";
	} else if(substr($photo, 0, 7) == "http://") {
		$url = $photo;
	}
	return $url;
}
function createThumbs($photo, $largura_fixa, $altura_fixa){
	
    $source = $photo;

	if(!file_exists($source))
	{
		echo "Arquivo da imagem não encontrado!";
		exit;
	}

	$arquivo_miniatura = explode('.', $source);
	$arquivo_miniatura = $arquivo_miniatura[0]."mini.jpg";

	$img_origem = imagecreatefromjpeg($source);
	$origem_x = imagesx($img_origem);
	$origem_y = imagesy($img_origem);

	$x = $largura_fixa;
	$y = $altura_fixa;
	
	$img_final = imagecreatetruecolor($x, $y);
	imagecopyresampled($img_final, $img_origem, 0, 0, 0, 0, $x+1, $y+1, $origem_x, $origem_y);
	imagejpeg($img_final, $arquivo_miniatura);
	
	return $arquivo_miniatura;
      
}
function MailUser(){
	$mail = "whatoodo@whatoodo.com";
	return $mail;
}
function MailPasswd(){
	$passwd = "123mudar";
	return $passwd;
}
function MailHost(){
	$host = "mail.whatoodo.com";
	return $host;
}

function curPageURL() {
	$pageURL = 'http';
	if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
	$pageURL .= "://";
	if ($_SERVER["SERVER_PORT"] != "80") {
		$pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].substr($_SERVER["SCRIPT_NAME"], 0, -4);
	} else {
		$pageURL .= $_SERVER["SERVER_NAME"].substr($_SERVER["SCRIPT_NAME"], 0, -4);
	}
	return $pageURL;
}
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::                                                                         :*/
/*::  this routine calculates the distance between two points (given the     :*/
/*::  latitude/longitude of those points). it is being used to calculate     :*/
/*::  the distance between two zip codes or postal codes using our           :*/
/*::  zipcodeworld(tm) and postalcodeworld(tm) products.                     :*/
/*::                                                                         :*/
/*::  definitions:                                                           :*/
/*::    south latitudes are negative, east longitudes are positive           :*/
/*::                                                                         :*/
/*::  passed to function:                                                    :*/
/*::    lat1, lon1 = latitude and longitude of point 1 (in decimal degrees)  :*/
/*::    lat2, lon2 = latitude and longitude of point 2 (in decimal degrees)  :*/
/*::    unit = the unit you desire for results                               :*/
/*::           where: 'm' is statute miles                                   :*/
/*::                  'k' is kilometers (default)                            :*/
/*::                  'n' is nautical miles                                  :*/
/*::  united states zip code/ canadian postal code databases with latitude & :*/
/*::  longitude are available at http://www.zipcodeworld.com                 :*/
/*::                                                                         :*/
/*::  For enquiries, please contact sales@zipcodeworld.com                   :*/
/*::                                                                         :*/
/*::  official web site: http://www.zipcodeworld.com                         :*/
/*::                                                                         :*/
/*::  hexa software development center © all rights reserved 2004            :*/
/*::                                                                         :*/
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
function distance($lat1, $lon1, $lat2, $lon2, $unit = 'K') { 

  $lat1 = deg2rad($lat1);
  $lat2 = deg2rad($lat2);
  $theta = deg2rad($lon1 - $lon2); 
  $dist = rad2deg(acos(sin($lat1) * sin($lat2) +  cos($lat1) * cos($lat2) * cos($theta))); 
  $miles = $dist * 60 * 1.1515;
  $unit = strtoupper($unit);

  if ($unit == "K") {
    return ($miles * 1.609344); 
  } else if ($unit == "N") {
      return ($miles * 0.8684);
    } else {
        return $miles;
      }
}
?>
