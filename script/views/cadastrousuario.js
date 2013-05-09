var wb = window.wb || {};

wb.cadastrousuario = {
	init: function(){
                document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK01}","active");
                document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE01}", "active").replace("{LINK01}", "index.php?page=cadastrousuario").replace("{LINKLABEL}", "Cadastro de Usuários/Clientes")
                                                                .replace("{LINK02}","index.php?page=exclusaousuarios").replace("{LINKLABEL02}", "Exclusão de usuários")
                                                                .replace("{LINK03}","index.php?page=cadastroEmpresa").replace("{LINKLABEL03}", "Cadastro de Empresas")
                                                                .replace("{LINK04}","index.php?page=exclusaoEmpresa").replace("{LINKLABEL04}", "Exclusão de Empresas");
                $('.navbar-form').hide();                                
		wb.cadastrousuario.bind();
                service.getEmpresas(function(data) {
                    wb.cadastrousuario.render(data);
		});				
	},
	bind: function(){             

	},
	render: function(data){
            var activity = "";            
            var tamanho = data['empresas'].length;
            for(x = 0; x < tamanho; x++){
                var item = data['empresas'][x];
                activity += '<input type="radio" name="empresas" value="'+item.nome+'" checked/> '+ item.nome + '<br/>';
            }

	  document.getElementById('cadastrousuario').innerHTML = template.Componentadduser.replace("{EMPRESAS}", activity);
          
          $('.Cadastrar').click(function (){
              var nome = document.getElementById('name-user').value;
              var email = document.getElementById('email-user').value;
              var senha = $('#password-user').val();
              if (nome == "" || nome == " "){
                  alert("Preencha todos os campos");
              }else if ( email == "" || email == " "){
                  alert("Preencha todos os campos");
              }else if( senha == "" || senha == " "){
                  alert("Preencha todos os campos");
              }else{
	        var params = {
                    url: service.getBaseUrl()+'adduser.php',
                    global: false,
                    type: "POST",
                    data: {
                        "nome": document.getElementById('name-user').value,
                        "email": document.getElementById('email-user').value,
                        "senha": document.getElementById('password-user').value,
                        "empresa": $("input[name='empresas']:checked").val(),
                        "usertype": document.getElementById('user-type').value
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        //console.log(data);
                        if (data.status == "OK") {
                            alert("Usuário cadastrado com sucesso");
                            document.location.reload();
                        }
                    },
                    error: function(data) {
                      Alert("Cannot connect to the server. Please try again later!");
                    }
                };                
                $.ajax(params);	        
              }
	    });
	  
	},
	destroy: function(){
	}
};
window.wb = wb;
