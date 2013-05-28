var wb = window.wb || {};

wb.exclusaousuarios = {
	init: function(){
        if (wb.user != null && wb.user != 'undefined' && wb.tipo == "admin") { 
            document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK01}","active");
		    wb.exclusaousuarios.bind();
    		wb.exclusaousuarios.render();	
            service.getUsuarios(function(data) {
                wb.exclusaousuarios.renderUsuarios(data);
    		});
        }else{
            window.location = 'index.php';
        }
	},
	bind: function(){             
            $('.navbar-form').hide();
                       
	},
	render: function(data){	                     	  
            document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE02}", "active").replace("{LINK01}", "index.php?page=cadastrousuario").replace("{LINKLABEL}", "Cadastro de Usuários/Clientes")
                                                                .replace("{LINK02}","index.php?page=exclusaousuarios").replace("{LINKLABEL02}", "Exclusão de usuários")
                                                                .replace("{LINK03}","index.php?page=cadastroEmpresa").replace("{LINKLABEL03}", "Cadastro de Empresas")
                                                                .replace("{LINK04}","index.php?page=exclusaoEmpresa").replace("{LINKLABEL04}", "Exclusão de Empresas");                                                          
	},
        renderUsuarios: function(data){
            var activity = "";            
            var tamanho = data['usuarios'].length;
            for(x = 0; x < tamanho; x++){
                var item = data['usuarios'][x];
                activity += template.listusers.replace("{EXCLUIR}", item.uid).replace("{NOMECLIENTE}", item.nome).replace("{EMAILCLIENTE}", item.email).replace("{TIPOCLIENTE}", item.tipo);
            }
            document.getElementById('exclusaousuarios').innerHTML = template.Componentremoveuser.replace("{TITLE}", "Excluir Cliente");//activity;
            document.getElementById('list-itens').innerHTML = activity
            $('.excluir-cliente').click( function() {
                var params = {
                    url: service.getBaseUrl()+'removerusuario.php',
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
                            alert("Usuário excluido com sucesso");
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
