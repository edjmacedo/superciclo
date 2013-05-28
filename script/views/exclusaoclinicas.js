var wb = window.wb || {};

wb.exclusaoclinicas = {
	init: function(){
        if (wb.user != null && wb.user != 'undefined' && wb.tipo == "admin") { 
            document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK02}","active");
		    wb.exclusaoclinicas.bind();
		    wb.exclusaoclinicas.render();	
            service.getClinicas(function(data) {
                wb.exclusaoclinicas.renderClinicas(data);
    		});
        }else{
            window.location = 'index.php';
        }
	},
	bind: function(){             
            $('.navbar-form').hide();              
	},
	render: function(data){	                     	  
            document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE02}", "active").replace("{LINK01}", "index.php?page=cadastroclinica").replace("{LINKLABEL}", "Cadastro de Clinicas")
                                                                .replace("{LINK02}","index.php?page=exclusaoclinicas").replace("{LINKLABEL02}", "Exclusão de clinicas");
            $('#link-03').hide();
            $('#link-04').hide();
	},
        renderClinicas: function(data){
            var activity = "";            
            var tamanho = data['clinicas'].length;
            for(x = 0; x < tamanho; x++){
                var item = data['clinicas'][x];
                activity += template.listclinicas.replace("{EXCLUIR}", item.cid).replace("{NOMECLIENTE}", item.nome).replace("{EMAILCLIENTE}", item.endereco).replace("{TIPOCLIENTE}", item.telefone);
            }
            document.getElementById('exclusaoclinicas').innerHTML = template.Componentremoveuser.replace("{TITLE}", "Excluir Clinicas");//activity;
            document.getElementById('list-itens').innerHTML = activity
            $('.excluir-cliente').click( function() {
                var params = {
                    url: service.getBaseUrl()+'removerclinica.php',
                    global: false,
                    type: "POST",
                    data: {
                        "clinid": $(this).attr('uid')
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        //console.log(data);
                        if (data.status == "OK") {
                            alert("Clinica excluida com sucesso");
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
