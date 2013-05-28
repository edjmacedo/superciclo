var wb = window.wb || {};

wb.cadastroEmpresa = {
	init: function(){
        if (wb.user != null && wb.user != 'undefined' && wb.tipo == "admin") { 
            document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK01}","active");
            document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE03}", "active")
                .replace("{LINK01}", "index.php?page=cadastrousuario")
                .replace("{LINKLABEL}", "Cadastro de Usuários/Clientes")
                .replace("{LINK02}","index.php?page=exclusaousuarios")
                .replace("{LINKLABEL02}", "Exclusão de usuários")
                .replace("{LINK03}","index.php?page=cadastroEmpresa")
                .replace("{LINKLABEL03}", "Cadastro de Empresas")
                .replace("{LINK04}","index.php?page=exclusaoEmpresa")
                .replace("{LINKLABEL04}", "Exclusão de Empresas");
            $('.navbar-form').hide();
		    wb.cadastroEmpresa.bind();
		    wb.cadastroEmpresa.render();
        }else{
            window.location = 'index.php';
        }
	},
	bind: function(){                         
	},
	render: function(data){

	  document.getElementById('cadastroEmpresa').innerHTML = template.ComponentAddEmpresas;
          
          $("#tel-empresa").mask("(999) 9999-9999");
          
          $('.Cadastrar').click(function (){
              var nome = document.getElementById('name-empresa').value;
              var endereco = document.getElementById('text-empresa').value;
              var telefone = $('#tel-empresa').val();
              if (nome == "" || nome == " "){
                  alert("Preencha todos o campo Nome");              
              }else{
	        var params = {
                    url: service.getBaseUrl()+'addempresa.php',
                    global: false,
                    type: "POST",
                    data: {
                        "nome": nome,
                        "endereco": endereco,
                        "telefone": telefone                        
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        //console.log(data);
                        if (data.status == "OK") {
                            alert("Empresa cadastrada com sucesso");
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
