var template = window.template || {};
template = {
	'componentFooter' : 	'<li class="{LINK01}">'+
				    '<a href="index.php?page=empresa">'+
				      'A Empresa'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK02}">'+
				    '<a href="index.php?page=servicos">'+
				      'Serviços'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK03}">'+
				    '<a href="index.php?page=parceiros">'+
				      'Parceiros'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK04}">'+
				    '<a href="index.php?page=contato">'+
				      'Contato'+
				    '</a>'+
				  '</li>',
        'componentLogged' : 	'<li class="{LINK01}" id="link01">'+
				    '<a href="index.php?page=cadastrousuario">'+
				      'Gerenciamento de usuários e Clientes'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK02}" id="link02">'+
				    '<a href="index.php?page=cadastroclinica">'+
				      'Gerenciamento de Clinicas'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK03}" id="link03">'+
				    '<a href="index.php?page=cadastroencaminhamento">'+
				      'Encaminhamentos'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK04}">'+
				    '<a href="">'+
				      ''+
				    '</a>'+
				  '</li>'+
                                  '<li class="">'+
				    '<a href="index.php">'+
				      'Sair'+
				    '</a>'+
				  '</li>',
	'componentIndex' :   '<div class="row">'+
				'<div class="span4">'+
				  '<img src="{MAINIMG}" >'+
				'</div>'+
				'<div class="span8">'+
				  '<div>'+
				    '<h3>'+
				      '<strong>'+
					'{MAINLABELTITLE}'+
				      '</strong>'+
				    '</h3>'+
				    '<p align="justify">'+
				      '<span style="text-align:justify; font-size: 13.333333969116211px;">'+
					'{MAINTEXT}'+
				      '</span>'+
				      '<br>'+
				      '<br>'+
				      '&nbsp;'+
				    '</p>'+
				  '</div>'+
				'</div>'+
			      '</div>'+
			      '<hr>'+
			      '<div>'+
				'{FOOTER}'+
			      '</div>',
        'componentEmpresa' :   '<div class="row">'+
				'<div class="span4">'+
				  '<img src="{MAINIMG}" >'+
				'</div>'+
				'<div class="span8">'+
				  '<div>'+
				    '<h4>'+
				      '<strong>'+
					'{MAINLABELTITLE}'+
				      '</strong>'+
				    '</h4>'+
				    '<p align="justify">'+
				      '<span style="text-align:justify; font-size: 13.333333969116211px;">'+
					'{MAINTEXT}'+
				      '</span>'+				      
				      '&nbsp;'+
				    '</p>'+                                    
				  '</div>'+	
                                  '<div>'+
				    '<h4>'+
				      '<strong>'+
					'{SECONDLABELTITLE}'+
				      '</strong>'+
				    '</h4>'+
				    '<p align="justify">'+
				      '<span style="text-align:justify; font-size: 13.333333969116211px;">'+
					'{SECONDMAINTEXT}'+
				      '</span>'+				      
				      '&nbsp;'+
				    '</p>'+                                    
				  '</div>'+	
                                  '<div>'+
				    '<h4>'+
				      '<strong>'+
					'{THIRDLABELTITLE}'+
				      '</strong>'+
				    '</h4>'+
				    '<p align="justify">'+
				      '<span style="text-align:justify; font-size: 13.333333969116211px;">'+
					'{THIRDMAINTEXT}'+
				      '</span>'+				      
				      '&nbsp;'+
				    '</p>'+                                    
				  '</div>'+                                  
				'</div>'+
			      '</div>'+
			      '<hr>'+
			      '<div>'+
				'{FOOTER}'+
			      '</div>',
        'ComponentParceiros' : '<div class="row">'+
                                    '<h3>Clientes</h3><hr/>'+                                    
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/cafeponto.png">'+
                                    '</div>'+                                    
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/paodequeijo.png">'+
                                    '</div>'+                                       
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/diesel.png">'+
                                    '</div>'+                                
                                '</div><br/>'+
                                '<div class="row">'+
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/protemax.png">'+
                                    '</div>'+                                    
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/portaco.png">'+
                                    '</div>'+                                    
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/magistral.png">'+
                                    '</div>'+
                                '</div><br/>'+
                                '<div class="row">'+
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/infocentro.png">'+
                                    '</div>'+                                    
                                    '<div class="span4">'+
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/wayfitness.png">'+
                                    '</div>'+                                                                        
                                    '<div class="span4">'+                                        
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/rm.png">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<hr/><h3>Parceiros</h3><hr/>'+ 
                                    '<div class="span4">'+                                        
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/centerclin.png">'+
                                    '</div>'+
                                    '<div class="span4">'+                                        
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/clinicor.png">'+
                                    '</div>'+
                                    '<div class="span4">'+                                        
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/paulan.png">'+
                                    '</div>'+
                                '</div><br/>'+
                                '<div class="row">'+
                                    '<div class="span4">'+                                        
                                        '<img  alt="140x140" style="width: 80px; height: 80px;" src="style/img/unimagem.png">'+
                                    '</div>'+                                    
                                '</div>'+
                                '<hr/>'+
                                '<div>'+
                                    '©ConsultoriaSuperCiclo 2013'+
                                '</div>',
	'contactForm' : '<div class="hero-unit">'+
			  '<h3>'+
			    'Entre em Contato Conosco'+
			  '</h3>'+
			  '<div class="img-contact" >'+
			    '<img src="style/img/contato.jpeg" />'+
			      '<p>Av. Eduardo Ribeiro, 567 - Centro<br/>'+
			      'Sala 1901 - 19 Andar<br/>'+
                              'Ed. Manaus Shopping Center<br/>'+
                              'Cep 69010-040 - Manaus -AM<br/>'+
			      'Telefone: (92) 3213-5987 </p>'+
			  '</div>'+
			  //'<form>'+
			    '<div class="control-group">'+
			      '<label for="textinput4">'+
				'Nome'+
			      '</label>'+
			      '<input name="textinput4" type="" id="nome">'+
			    '</div>'+
			    '<div class="control-group">'+
			      '<label for="textinput5">'+
				'E-mail'+
			      '</label>'+
			      '<input name="textinput5" type="email" id="email">'+
			    '</div>'+
			    '<div class="control-group">'+
			      '<label for="textarea1" >'+
				'Mensagem'+
			      '</label>'+
			    '</div>'+
			    '<textarea name="textarea1" cols="5" rows="5" id="mensagem"></textarea>'+
			    '<br/>'+
			    '<div class="Enviar">'+
			      '<div class="btn btn-large" id="enviar">'+
				'Enviar'+
			      '</div>'+
			   //'</form>'+
			   '<div class="control-group">'+
			   '</div>'+
			  '</div>'+
			  '<div class="row">'+
			  '</div>'+
			  '<hr>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',
        'CompenentMenuLeft' : '<div class="left-menu">'+
                                    '<ul class="nav nav-tabs" id="menuactive">'+
                                        '<li class="{LINKACTIVE01}">'+
                                            '<a href="{LINK01}">'+
                                                '{LINKLABEL}'+
                                            '</a>'+
                                        '</li>'+
                                        '<li class="{LINKACTIVE02}">'+
                                            '<a href="{LINK02}">'+
                                                '{LINKLABEL02}'+
                                            '</a>'+
                                        '</li>'+ 
                                        '<li class="{LINKACTIVE03}" id="link-03">'+
                                            '<a href="{LINK03}">'+
                                                '{LINKLABEL03}'+
                                            '</a>'+
                                        '</li>'+ 
                                        '<li class="{LINKACTIVE04}" id="link-04">'+
                                            '<a href="{LINK04}">'+
                                                '{LINKLABEL04}'+
                                            '</a>'+
                                        '</li>'+ 
                                     '</ul>'+
                                '</div>',
                            
        'Componentadduser' : '<div class="hero-unit">'+
			  '<h3>'+
			    'Cadastro de usuários'+
			  '</h3>'+			  
			  '<form>'+
			    '<div class="control-group">'+
			      '<label for="textinput4">'+
				'Nome'+
			      '</label>'+
			      '<input name="textinput4" type="" id="name-user">'+
			    '</div>'+
			    '<div class="control-group">'+
			      '<label for="textinput5">'+
				'E-mail'+
			      '</label>'+
			      '<input name="textinput5" type="email" id="email-user">'+
			    '</div>'+
			    '<div class="control-group">'+
			      '<label for="textarea1" >'+
				'Senha'+
			      '</label>'+
                              '<input type="password" id="password-user">'+
			    '</div>'+			   
                            '<div class="control-group">'+
			      '<label for="textarea1" >'+
				'Empresa'+
			      '</label>'+
                              '{EMPRESAS}'+
			    '</div>'+			   
                            '<div class="control-group">'+
			      '<label for="textarea1" >'+
				'Tipo'+
			      '</label>'+
                              '<select id="user-type">'+
                                /*'<option value="admin">'+
					'Usuário Administrador'+
				'</option>'+*/
				'<option value="usuario">'+
                                        'Usuário Comum'+
				'</option>'+				
                            '</select>'+
			    '</div>'+			    
			    '<br/>'+
			    '<div class="Cadastrar" id="cadastrar">'+
			      '<a class="btn btn-large" href="#">'+
				'Cadastrar'+
			      '</a>'+
			   '</form>'+
			   '<div class="control-group">'+
			   '</div>'+
			  '</div>'+
			  '<div class="row">'+
			  '</div>'+
			  '<hr>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',
        'ComponentAddEmpresas' : '<div class="hero-unit">'+
			  '<h3>'+
			    'Cadastro de empresas'+
			  '</h3>'+			  
			  '<form>'+
			    '<div class="control-group">'+
			      '<label for="textinput4">'+
				'Nome'+
			      '</label>'+
			      '<input name="textinput4" type="" id="name-empresa">'+
			    '</div>'+			    
			    '<div class="control-group">'+
			      '<label for="textarea1" >'+
				'Endereço'+
			      '</label>'+
                              '<input type="text" id="text-empresa">'+
			    '</div>'+			   
                            '<div class="control-group">'+
			      '<label for="textarea1" >'+
				'Telefone'+
			      '</label>'+
                              '<input type="text" id="tel-empresa">'+
			    '</div>'+			                               		    
			    '<br/>'+
			    '<div class="Cadastrar" id="cadastrar">'+
			      '<a class="btn btn-large" href="#">'+
				'Cadastrar'+
			      '</a>'+
			   '</form>'+
			   '<div class="control-group">'+
			   '</div>'+
			  '</div>'+
			  '<div class="row">'+
			  '</div>'+
			  '<hr>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',                         
        'Componentremoveuser' : '<div class="hero-unit">'+
			  '<h3>'+
			    '{TITLE}'+
			  '</h3>'+   
                          '<div class="list-itens" id="list-itens">'+                          
                          '</div>'+
                          '</div>'+
			   '<div class="control-group">'+
			   '</div>'+
			  '</div>'+
			  '<div class="row">'+
			  '</div>'+
			  '<hr>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',            
         'listusers' :      '<div class="nome-cliente">'+
                                '<p>Nome do cliente: {NOMECLIENTE}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>E-mail: {EMAILCLIENTE}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Tipo: {TIPOCLIENTE}</p>'+
                            '</div>'+
                            '<div class="excluir-cliente" uid="{EXCLUIR}">'+
                                '<button type="submit">Excluir</button>'+
                            '</div>'+
                            '<br/>'+
                            '<hr/>',
        'listEmpresas' :    '<div class="nome-cliente">'+
                                '<p>Nome da clinica: {NOMECLIENTE}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Endereço da Clinica: {ENDERECO}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Telefone: {TELEFONE}</p>'+
                            '</div>'+
                            '<div class="excluir-empresa" uid="{EXCLUIR}">'+
                                '<button type="submit">Excluir</button>'+
                            '</div>'+
                            '<br/>'+
                            '<hr/>',                                
        'listclinicas' :      '<div class="nome-cliente">'+
                                '<p>Nome da clinica: {NOMECLIENTE}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Endereço: {EMAILCLIENTE}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Telefone: {TIPOCLIENTE}</p>'+
                            '</div>'+
                            '<div class="excluir-cliente" uid="{EXCLUIR}">'+
                                '<button type="submit">Excluir</button>'+
                            '</div>'+
                            '<br/>'+
                            '<hr/>',
         'listencaminhamentos' :      '<div class="nome-cliente">'+
                                '<p>Nome: {NOMECLIENTE}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Tipo de Exame: {TIPO}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Empresa: {EMPRESA}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Data do Encaminhamento: {DTENCAMINHAMENTO}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Status: {STATUS}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Clinica: {CLINICA}</p>'+
                            '</div>'+
                            '<div class="editar-encaminhamento" eid="{EDITAR}">'+
                                '<button type="submit">Editar Este Encaminhamento</button>'+
                            '</div>'+
                            '<br/>'+
                            '<hr/>',          
        'listfencaminhamentos' :      '<div class="nome-cliente">'+
                                '<p>Nome: {NOMECLIENTE}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Tipo de Exame: {TIPO}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Empresa: {EMPRESA}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Data do Encaminhamento: {DTENCAMINHAMENTO}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Status: {STATUS}</p>'+
                            '</div>'+
                            '<div class="nome-cliente">'+
                                '<p>Clinica: {CLINICA}</p>'+
                            '</div>'+
                            '<div class="editar-encaminhamento" eid="{EDITAR}">'+
                                '<button type="submit">Visualizar Este Encaminhamento</button>'+
                            '</div>'+
                            '<br/>'+
                            '<hr/>',          
        'ComponentadicionarClinica' : '<div class="hero-unit">'+
			  '<h3>'+
			    'Cadastro de Clinicas'+
			  '</h3>'+			  
			  '<form>'+
			    '<div class="control-group">'+
			      '<label for="textinput4">'+
				'Nome'+
			      '</label>'+
			      '<input name="textinput4" type="text" id="nome-clinica">'+
			    '</div>'+
                            '<div class="control-group">'+
			      '<label for="textinput4">'+
				'E-mail'+
			      '</label>'+
			      '<input name="textinput4" type="email" id="nome-email">'+
			    '</div>'+
			    '<div class="control-group">'+
			      '<label for="textinput5">'+
				'Endereço'+
			      '</label>'+
			      '<input name="textinput5" type="text" id="endereco-clinica">'+
			    '</div>'+
                            '<div class="control-group">'+
			      '<label for="textinput5">'+
				'Telefone'+
			      '</label>'+
			      '<input name="telefone" type="text" id="endereco-telefone">'+
			    '</div>'+
			    //'<div class="control-group">'+
			    //  '<label for="textarea1" >'+
			    //	'Foto'+
			    //  '</label>'+
                            //  '<input type="file" name="fotoClinica" id="FotoClinica">'+
			    //'</div>'+			                                		    
			    '<br/>'+
			    '<div class="Cadastrar" id="cadastrar">'+
			      '<a class="btn btn-large" href="#">'+
				'Cadastrar'+
			      '</a>'+
			   '</form>'+
			   '<div class="control-group">'+
			   '</div>'+
			  '</div>'+
			  '<div class="row">'+
			  '</div>'+
			  '<hr>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',
        'ComponentaddEncaminhamentos' : '<div class="encaminhamentos">'+
                                    '<div class="identificacao">'+
                                        '<h3>Identificação</h3>'+
                                        '<hr/>'+
                                        '<input type="radio" name="identificacao" value="admissional" checked/> Admissional'+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="demissional"/> Demissional '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="retornotrabalho"/> Retorno ao Trabalho '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="mudancafuncao"/> Mudança de Função '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="periodico"/> Periódico '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="particular"/> Particular '+
                                    '</div>'+
                                    '<hr>'+
                                    '<div class="identificacao">'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Nome: </label>'+
                                            '<input type="text" id="encaminhamento-nome"></input>'+
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Celular: </label>'+
                                            '<input type="text" id="encaminhamento-celular"></input>'+   
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        /*'<div class="align-hori" id="align-hori">'+
                                            '<label>Empresa: </label>'+
                                            '<input type="text" id="encaminhamento-empresa"></input>'+                                        
                                        '</div>'+*/
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Cargo/Função: </label>'+
                                            '<input type="text" id="encaminhamento-cargo"></input>'+  
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data do Encaminhamento: </label>'+
                                            '<input type="text" id="encaminhamento-data"></input>'+ 
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>RG: </label>'+
                                            '<input type="text" id="encaminhamento-rg"></input>'+                                        
                                        '</div>'+ 
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data de Nascimento: </label>'+
                                            '<input type="text" id="encaminhamento-dtnascimento"></input>'+                                        
                                        '</div>'+
                                    '</div>'+
                                    '<hr/>'+
                                    '<div class="exames-realizar">'+
                                        '<h3>Clinicas</h3>'+
                                        '{RADIOCLINICA}'+
                                        '<br/>'+
                                    '</div>'+
                                    '<hr/>'+
                                    '<div class="exames-realizar">'+
                                        '<h3>Exames a Realizar</h3>'+
                                        '<hr/>'+                                        
                                        '<input type="checkbox" name="aso" value="true" checked> ASO - EXAME CLÍNICO </input>'+
                                        '</br>'+ 
                                        '<input type="checkbox" name="colesterol" value="true"> COLESTEROL </input>'+                                        
                                        '</br>'+                                        
                                        '<input type="checkbox" name="audiometria" value="true"> AUDIOMETRIA</input>'+
                                        '</br>'+ 
                                        '<input type="checkbox" name="triglicerideos" value="true"> TRIGLICERÍDEOS</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="hemograma" value="true"> HEMOGRAMA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="raiox" value="true"> RAIO X COLUNA CERVICAL LOMBO SACRA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="eas" value="true"> EAS - URINA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="vecto" value="true"> VECTOELETRONISTAGMOGRAFIA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="epf" value="true"> EPF - FEZES</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="tipagem" value="true"> TIPAGEM SANGUINEA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="vdrl" value="true"> VDRL</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="tgo" value="true"> TGO/TGP</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="glicose" value="true"> GLICOSE</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="espiro" value="true"> ESPIROMETRIA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="beta" value="true"> BETA HCG</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="eletro" value="true"> ELETROENCEFALOGRAMA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="dosagem" value="true"> DOSAGEM</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="cardio" value="true"> ELETROCARDIOGRAMA</input>'+                                        
                                        '</br>'+
                                    '</div>'+
                                    '<hr/>'+
                                    '<div class="align-hori" id="align-hori">'+
                                            '<label>Observação: </label>'+
                                            '<textarea rows="3" id="observacao"></textarea>'+  
                                            '&nbsp; &nbsp; &nbsp;'+
                                    '</div>'+
                                    '<div class="Cadastrar" id="cadastrar">'+
                                        '<a class="btn btn-large" href="#">'+
                                            'Cadastrar'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',
        'ComponentEditEncaminhamentos' : '<div class="encaminhamentos">'+
                                    '<div class="identificacao">'+
                                        '<h3>Identificação</h3>'+
                                        '<hr/>'+
                                        '<input type="radio" name="identificacao" value="admissional" {CHECKED}/> Admissional'+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="demissional" {CHECKED02}/> Demissional '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="retornotrabalho" {CHECKED03}/> Retorno ao Trabalho '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="mudancafuncao" {CHECKED04}/> Mudança de Função '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="periodico" {CHECKED05}/> Periódico '+
                                        '&nbsp; &nbsp; &nbsp;'+
                                        '<input type="radio" name="identificacao" value="particular" {CHECKED06}/> Particular '+
                                    '</div>'+
                                    '<hr>'+
                                    '<div class="identificacao">'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Nome: </label>'+
                                            '<input type="text" id="encaminhamento-nome" value="{VALUENOME}"></input>'+
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Celular: </label>'+
                                            '<input type="text" id="encaminhamento-celular" value="{VALUECEL}"></input>'+   
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Empresa: </label>'+
                                            '<input type="text" id="encaminhamento-empresa" value="{VALUEEMPRESA}"></input>'+                                        
                                        '</div>'+
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Cargo/Função: </label>'+
                                            '<input type="text" id="encaminhamento-cargo" value="{VALUECARGO}"></input>'+  
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data do Encaminhamento: </label>'+
                                            '<input type="text" id="encaminhamento-data" value="{VALUEDT}"></input>'+ 
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>RG: </label>'+
                                            '<input type="text" id="encaminhamento-rg" value="{VALUERG}"></input>'+                                        
                                        '</div>'+
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data de Nascimento: </label>'+
                                            '<input type="text" id="encaminhamento-dtnascimento" value="{VALUENASC}"></input>'+                                        
                                        '</div>'+
                                    '</div>'+
                                    '<hr/>'+                                    
                                    '<div class="exames-realizar">'+
                                        //'<h3>Clinicas</h3>'+
                                        //'{RADIOCLINICA}'+
                                        //'<br/>'+
                                    '</div>'+
                                    //'<hr/>'+
                                    '<div class="exames-realizar">'+
                                        '<h3>Exames a Realizar</h3>'+
                                        '<hr/>'+                                        
                                        '<input type="checkbox" name="aso" value="true" {CHK}> ASO - EXAME CLÍNICO </input>'+
                                        '</br>'+ 
                                        '<input type="checkbox" name="colesterol" value="true" {CHK02}> COLESTEROL </input>'+                                        
                                        '</br>'+                                        
                                        '<input type="checkbox" name="audiometria" value="true" {CHK03}> AUDIOMETRIA</input>'+
                                        '</br>'+ 
                                        '<input type="checkbox" name="triglicerideos" value="true" {CHK04}> TRIGLICERÍDEOS</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="hemograma" value="true" {CHK05}> HEMOGRAMA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="raiox" value="true" {CHK06}> RAIO X COLUNA CERVICAL LOMBO SACRA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="eas" value="true" {CHK07}> EAS - URINA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="vecto" value="true" {CHK08}> VECTOELETRONISTAGMOGRAFIA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="epf" value="true" {CHK09}> EPF - FEZES</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="tipagem" value="true" {CHK10}> TIPAGEM SANGUINEA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="vdrl" value="true" {CHK11}> VDRL</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="tgo" value="true" {CHK12}> TGO/TGP</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="glicose" value="true" {CHK13}> GLICOSE</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="espiro" value="true" {CHK14}> ESPIROMETRIA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="beta" value="true" {CHK15}> BETA HCG</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="eletro" value="true" {CHK16}> ELETROENCEFALOGRAMA</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="dosagem" value="true" {CHK17}> DOSAGEM</input>'+                                        
                                        '</br>'+
                                        '<input type="checkbox" name="cardio" value="true" {CHK18}> ELETROCARDIOGRAMA</input>'+                                        
                                        '</br>'+
                                    '</div>'+
                                    '<hr/>'+
                                    '<div class="observacao">'+
                                        '<h3>Observação</h3>'+
                                        '{OBSERVACAO}'+
                                    '</div>'+
                                    '<hr/>'+
                                    '<div class="control-group">'+
                                        '<label for="textarea1" >'+
                                            'Alterar Status'+
                                        '</label>'+                                        
                                        '<select id="encaminhamento-status">'+
                                            '<option value="aberta">'+
                                                'Aberta'+
                                            '</option>'+
                                            '<option value="andamento">'+
                                                'Andamento'+
                                            '</option>'+				
                                        '</select>'+
                                    '</div>'+	                                    
                                    '<div class="Atualizar" id="atualizar">'+
                                        '<a class="btn btn-large" href="#">'+
                                            'Atualizar'+
                                        '</a>'+
                                    '</div>'+                                    
                                '</div>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',
        'ComponentedtEncaminhamentosAbertos' : '<div class="encaminhamentos">'+
                                    '<div class="identificacao" >'+
                                        '<h3>Identificação</h3>'+
                                        '<hr/>'+
                                        '{CHECKED}'+                                       
                                        '{CHECKED02}'+                                        
                                        '{CHECKED03}'+                                        
                                        '{CHECKED04}'+                                        
                                        '{CHECKED05}'+ 
                                        '{CHECKED06}'+
                                    '</div>'+
                                    '<hr>'+
                                    '<div class="identificacao">'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Nome: </label>'+
                                            '<input type="text" id="encaminhamento-nome" value="{VALUENOME}" readonly="readonly"></input>'+
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Celular: </label>'+
                                            '<input type="text" id="encaminhamento-celular" value="{VALUECEL}" readonly="readonly"></input>'+   
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Empresa: </label>'+
                                            '<input type="text" id="encaminhamento-empresa" value="{VALUEEMPRESA}" readonly="readonly"></input>'+                                        
                                        '</div>'+
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Cargo/Função: </label>'+
                                            '<input type="text" id="encaminhamento-cargo" value="{VALUECARGO}" readonly="readonly"></input>'+  
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data do Encaminhamento: </label>'+
                                            '<input type="text" id="encaminhamento-data" value="{VALUEDT}" readonly="readonly"></input>'+ 
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>RG: </label>'+
                                            '<input type="text" id="encaminhamento-rg" value="{VALUERG}" readonly="readonly"></input>'+                                        
                                        '</div>'+
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data de Nascimento: </label>'+
                                            '<input type="text" id="encaminhamento-dtnascimento" value="{VALUENASC}" readonly="readonly"></input>'+                                        
                                        '</div>'+
                                    '</div>'+
                                    '<hr/>'+                                    
                                    '<div class="exames-realizar">'+
                                        //'<h3>Clinicas</h3>'+
                                        //'{RADIOCLINICA}'+
                                        //'<br/>'+
                                    '</div>'+
                                    //'<hr/>'+
                                    '<div class="exames-realizar">'+
                                        '<h3>Exames a Realizar</h3>'+
                                        '<hr/>'+                 
                                        '<ul>'+
                                            '{CHK}'+
                                            '{CHK02}'+                                                                                
                                            '{CHK03}'+ 
                                            '{CHK04}'+                                        
                                            '{CHK05}'+                                        
                                            '{CHK06}'+                                        
                                            '{CHK07}'+                                        
                                            '{CHK08}'+                                        
                                            '{CHK09}'+                                        
                                            '{CHK10}'+                                        
                                            '{CHK11}'+                                        
                                            '{CHK12}'+                                        
                                            '{CHK13}'+                                        
                                            '{CHK14}'+                                        
                                            '{CHK15}'+                                        
                                            '{CHK16}'+                                        
                                            '{CHK17}'+                                        
                                            '{CHK18}'+                                        
                                    '</div>'+
                                    '<hr/>'+
                                    '<div class="observacao">'+
                                        '<h3>Observação</h3>'+
                                        '{OBSERVACAO}'+
                                    '</div>'+
                                    '</hr>'+
                                    '<div class="control-group">'+
                                        '<label for="textarea1" >'+
                                            'Alterar Status'+
                                        '</label>'+
                                        '<select id="encaminhamento-status">'+
                                            '<option value="andamento">'+
                                                'Andamento'+
                                            '</option>'+
                                            '<option value="fechado">'+
                                                'Fechado'+
                                            '</option>'+				
                                        '</select>'+
                                    '</div>'+	
                                    '<div class="Atualizar" id="atualizar">'+
                                        '<a class="btn btn-large" href="#">'+
                                            'Atualizar'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',     
        'ComponentedtVisualizarEncaminhamentos' : '<div class="encaminhamentos">'+
                                    '<div class="identificacao" >'+
                                        '<h3>Identificação</h3>'+
                                        '<hr/>'+
                                        '{CHECKED}'+                                       
                                        '{CHECKED02}'+                                        
                                        '{CHECKED03}'+                                        
                                        '{CHECKED04}'+                                        
                                        '{CHECKED05}'+ 
                                        '{CHECKED06}'+
                                    '</div>'+
                                    '<hr>'+
                                    '<div class="identificacao">'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Nome: </label>'+
                                            '<input type="text" id="encaminhamento-nome" value="{VALUENOME}" readonly="readonly"></input>'+
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Celular: </label>'+
                                            '<input type="text" id="encaminhamento-celular" value="{VALUECEL}" readonly="readonly"></input>'+   
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Empresa: </label>'+
                                            '<input type="text" id="encaminhamento-empresa" value="{VALUEEMPRESA}" readonly="readonly"></input>'+                                        
                                        '</div>'+
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Cargo/Função: </label>'+
                                            '<input type="text" id="encaminhamento-cargo" value="{VALUECARGO}" readonly="readonly"></input>'+  
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data do Encaminhamento: </label>'+
                                            '<input type="text" id="encaminhamento-data" value="{VALUEDT}" readonly="readonly"></input>'+ 
                                            '&nbsp; &nbsp; &nbsp;'+
                                        '</div>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>RG: </label>'+
                                            '<input type="text" id="encaminhamento-rg" value="{VALUERG}" readonly="readonly"></input>'+                                        
                                        '</div>'+
                                        '<br/>'+
                                        '<div class="align-hori" id="align-hori">'+
                                            '<label>Data de Nascimento: </label>'+
                                            '<input type="text" id="encaminhamento-dtnascimento" value="{VALUENASC}" readonly="readonly"></input>'+                                        
                                        '</div>'+
                                    '</div>'+
                                    '<hr/>'+                                    
                                    '<div class="exames-realizar">'+
                                        //'<h3>Clinicas</h3>'+
                                        //'{RADIOCLINICA}'+
                                        //'<br/>'+
                                    '</div>'+
                                    //'<hr/>'+
                                    '<div class="exames-realizar">'+
                                        '<h3>Exames a Realizar</h3>'+
                                        '<hr/>'+                 
                                        '<ul>'+
                                            '{CHK}'+
                                            '{CHK02}'+                                                                                
                                            '{CHK03}'+ 
                                            '{CHK04}'+                                        
                                            '{CHK05}'+                                        
                                            '{CHK06}'+                                        
                                            '{CHK07}'+                                        
                                            '{CHK08}'+                                        
                                            '{CHK09}'+                                        
                                            '{CHK10}'+                                        
                                            '{CHK11}'+                                        
                                            '{CHK12}'+                                        
                                            '{CHK13}'+                                        
                                            '{CHK14}'+                                        
                                            '{CHK15}'+                                        
                                            '{CHK16}'+                                        
                                            '{CHK17}'+                                        
                                            '{CHK18}'+                                        
                                    '</div>'+
                                    '<hr/>'+ 
                                    '<div class="observacao">'+
                                        '<h3>Observação</h3>'+
                                        '{OBSERVACAO}'+
                                    '</div>'+
                                '</div>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',                              
	'componentLoading' : '<div class="component-loading">'+
									'<img src=style/img/3.gif>'+
								'</div>'
};	
window.template = template;
