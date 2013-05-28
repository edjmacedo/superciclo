var wb = window.wb || {};

wb.contato = {
	init: function(){
		document.getElementById('menuactive').innerHTML = template.componentFooter.replace("{LINK01}","").replace("{LINK02}", " ").replace("{LINK03}", " ").replace("{LINK04}", "active");
		wb.contato.bind();
		wb.contato.render();		
	},
	bind: function(){
	},
	render: function(data){

	  document.getElementById('contato').innerHTML = template.contactForm;
          
           $('#enviar').click(function (){
              var nome = document.getElementById('nome').value;
              var email = document.getElementById('email').value;
              var mensagem = document.getElementById('mensagem').value;                          
              if (nome == "" || nome == " "){
                  alert("Preencha ao menos o campo nome");              
              }if(email == "" || email == " "){
                  alert("Preencha o campo email");            
              }if(mensagem == "" || mensagem == " "){
                  alert("Preencha sua mensagem")
              }else{             
	        var params = {
                    url: service.getBaseUrl()+'contato.php',
                    global: false,
                    type: "POST",
                    data: {
                        "nome": nome,
                        "email": email,
                        "mensagem": mensagem                        
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {
                        //console.log(data);
                        //if (data.status == "OK") {
                         alert("Mensagem enviada com sucesso");
                         document.location.reload();
                       // }
                    },
                    error: function(data) {
                      alert("Cannot connect to the server. Please try again later!");
                    }
                };                
                $.ajax(params);	        
              }
	    });
	    $('.btn').click(function (){
             wb.login(document.getElementById('Email').value, sha1(document.getElementById('Password').value));
         });
	},
	destroy: function(){
	}
};
window.wb = wb;
