<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ConsultoriaSuperCiclo</title>
<script type="text/javascript" language="javascript" src="script/libs/jquery.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/lib.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/jquery-1.4.2.min.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/jquery-ui-1.8.4.custom.min.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/jquery.tokeninput.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/jquery.extras.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/jquery.quicksearch.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/jquery.autocomplete.js"></script>
<script type="text/javascript" language="javascript" src="script/libs/jquery.maskedinput.js"></script>
<script type="text/javascript" language="javascript" src="script/services/service.js"></script>
<script type="text/javascript" language="javascript" src="script/services/sessionService.js"></script>
<script type="text/javascript" language="javascript" src="script/templates/template.js"></script>
<script type="text/javascript" language="javascript" src="script/i18n.js"></script>
<script type="text/javascript" language="javascript" src="script/wb.js"></script>  
<script type="text/javascript" language="javascript" src="script/views/home.js"></script> 
<script type="text/javascript" language="javascript" src="script/views/contato.js"></script>
<script type="text/javascript" language="javascript" src="script/views/about.js"></script>
<script type="text/javascript" language="javascript" src="script/views/cadastrousuario.js"></script>
<script type="text/javascript" language="javascript" src="script/views/cadastroclinica.js"></script>
<script type="text/javascript" language="javascript" src="script/views/exclusaousuarios.js"></script>
<script type="text/javascript" language="javascript" src="script/views/exclusaoclinicas.js"></script>
<script type="text/javascript" language="javascript" src="script/views/cadastroencaminhamento.js"></script>
<script type="text/javascript" language="javascript" src="script/views/editarencaminhamento.js"></script>
<script type="text/javascript" language="javascript" src="script/views/encaminhamentosAndamento.js"></script>
<script type="text/javascript" language="javascript" src="script/views/encaminhamentosFechar.js"></script>
<script type="text/javascript" language="javascript" src="script/views/cadastroencaminhamentouser.js"></script>
<script type="text/javascript" language="javascript" src="script/views/cadastroEmpresa.js"></script>
<script type="text/javascript" language="javascript" src="script/views/exclusaoEmpresa.js"></script>
<script type="text/javascript" language="javascript" src="script/views/meusEncaminhamentos.js"></script>
<script type="text/javascript" language="javascript" src="script/views/empresa.js"></script>
<script type="text/javascript" language="javascript" src="script/views/servicos.js"></script>
<script type="text/javascript" language="javascript" src="script/views/parceiros.js"></script>



<link rel="stylesheet" href="style/reset.css" type="text/css">
<link rel="stylesheet" href="style/bootstrap.css" type="text/css">

<link rel="stylesheet" href="style/eggplant/jquery-ui-1.8.4.custom.css" type="text/css">
</head>

<body>
<div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="index.php">
            ConsultoriaSuperCiclo
          </a>
          <ul class="nav">
          </ul>
          <div class="navbar-form pull-right">
            <input name="textinput1" id="Email" type="email" placeholder="Email" class="span2">
            <input name="textinput2" id="Password" type="password" placeholder="Password" class="span2">
            <button class="btn" id="login-btn">
              Entrar
            </button>
          </div>
          <ul class="nav nav-tabs" id="menuactive">
          </ul>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div id="container" class="container">
        <div id="secondmenu" class="secondmenu"></div>
        <div id="loading" class="loading" style="display:none;"></div>
        <div id="home" class="home" style="display:none;"></div>
        <div id="secondmenu" class="secondmenu" style="display:none;"></div>
        <div id="contato" class="contato" style="display:none;"></div>
        <div id="about" class="about" style="display:none;"></div>
        <div id="cadastrousuario" class="cadastrousuario" style="display:none;"></div>
        <div id="cadastroclinica" class="cadastroclinica" style="display:none;"></div>
        <div id="exclusaousuarios" class="exclusaousuarios" style="display:none;"></div>
        <div id="exclusaoclinicas" class="exclusaoclinicas" style="display:none;"></div>
        <div id="cadastroencaminhamento" class="cadastroencaminhamento" style="display:none;"></div>
        <div id="editarencaminhamento" class="editarencaminhamento" style="display:none;"></div>
        <div id="encaminhamentosAndamento" class="encaminhamentosAndamento" style="display:none;"></div>
        <div id="encaminhamentosFechar" class="encaminhamentosFechar" style="display:none;"></div>
        <div id="cadastroencaminhamentouser" class="cadastroencaminhamentouser" style="display:none;"></div>
        <div id="cadastroEmpresa" class="cadastroEmpresa" style="display:none;"></div>
        <div id="exclusaoEmpresa" class="exclusaoEmpresa" style="display:none;"></div>
        <div id="meusEncaminhamentos" class="meusEncaminhamentos" style="display:none;"></div>
        <div id="empresa" class="empresa" style="display:none;"></div>
        <div id="servicos" class="servicos" style="display:none;"></div>
        <div id="parceiros" class="parceiros" style="display:none;"></div>
    </div>

</div>
</body>
</html>
