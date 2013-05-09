var wb = window.wb || {};

wb.exclusaoEmpresa = {
	init: function(){
                document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK01}","active");                                
		wb.exclusaoEmpresa.bind();
		wb.exclusaoEmpresa.render();	
                service.getEmpresas(function(data) {
                    wb.exclusaoEmpresa.renderEmpresas(data);
		});
	},
	bind: function(){             
            $('.navbar-form').hide();
                       
	},
	render: function(data){	                     	  
            document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE04}", "active").replace("{LINK01}", "index.php?page=cadastrousuario").replace("{LINKLABEL}", "Cadastro de Usuários/Clientes")
                                                                .replace("{LINK02}","index.php?page=exclusaousuarios").replace("{LINKLABEL02}", "Exclusão de usuários")
                                                                .replace("{LINK03}","index.php?page=cadastroEmpresa").replace("{LINKLABEL03}", "Cadastro de Empresas")
                                                                .replace("{LINK04}","index.php?page=exclusaoEmpresa").replace("{LINKLABEL04}", "Exclusão de Empresas");                                                          
	},
        renderEmpresas: function(data){
            var activity = "";            
            var tamanho = data['empresas'].length;
            for(x = 0; x < tamanho; x++){
                var item = data['empresas'][x];
                activity += template.listEmpresas.replace("{EXCLUIR}", item.eid).replace("{NOMECLIENTE}", item.nome).replace("{ENDERECO}", item.endereco).replace("{TELEFONE}", item.telefone);
            }
            document.getElementById('exclusaoEmpresa').innerHTML = template.Componentremoveuser.replace("{TITLE}", "Excluir Empresa");//activity;
            document.getElementById('list-itens').innerHTML = activity
            $('.excluir-empresa').click( function() {
                var params = {
                    url: service.getBaseUrl()+'removerempresa.php',
                    global: false,
                    type: "POST",
                    data: {
                        "userid": $(this).attr('uid')                        
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        //console.log(data);
                        if (data.status == "OK") {
                            alert("Empresa excluida com sucesso");
                            document.location.reload();
                        }
                    },
                    error: function(data) {
                      alert("Cannot connect to the server. Please try again later!");
                    }
                };                
                $.ajax(params);	                                                  
            });
        },
	destroy: function(){
	}
};
window.wb = wb;
