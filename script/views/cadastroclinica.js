var wb = window.wb || {};

wb.cadastroclinica = {
	init: function(){
                document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK02}","active");  
                document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE01}", "active").replace("{LINK01}", "index.php?page=cadastroclinica").replace("{LINKLABEL}", "Cadastro de Clinicas")
                                                                .replace("{LINK02}","index.php?page=exclusaoclinicas").replace("{LINKLABEL02}", "Exclusão de clinicas");
                $('.navbar-form').hide();
                $('#link-03').hide();
                $('#link-04').hide();
		wb.cadastroclinica.render();		
                wb.cadastroclinica.bind();
	},
	bind: function(){    
            $("#endereco-telefone").mask("(999) 9999-9999");
	},
	render: function(data){

	  document.getElementById('cadastroclinica').innerHTML = template.ComponentadicionarClinica;          
          $('.Cadastrar').click(function (){
              var nome = document.getElementById('nome-clinica').value;
              var endereco = document.getElementById('endereco-clinica').value;
              var telefone = document.getElementById('endereco-telefone').value;
              var email = document.getElementById('nome-email').value;              
              if (nome == "" || nome == " "){
                  alert("Preencha ao menos o campo nome");              
              }if(email == "" || email == " "){
                  alert("Preencha o campo email");            
              }else{             
	        var params = {
                    url: service.getBaseUrl()+'addclinica.php',
                    global: false,
                    type: "POST",
                    data: {
                        "nome": nome,
                        "endereco": endereco,
                        "telefone": telefone,
                        "email": email
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        //console.log(data);
                        if (data.status == "OK") {
                            alert("Clinica cadastrada com sucesso");
                            document.location.reload();
                        }
                    },
                    error: function(data) {
                      alert("Cannot connect to the server. Please try again later!");
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
