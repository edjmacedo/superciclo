var wb = window.wb || {};

wb.cadastroencaminhamento = {
	init: function(){
            if (wb.user != null && wb.user != 'undefined' && wb.tipo == "admin") {                              
                document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK03}","active");  
                document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE01}", "active")
                                                                .replace("{LINK01}", "index.php?page=cadastroencaminhamento")
                                                                .replace("{LINKLABEL}", "Cadastro de Encaminhamentos")
                                                                .replace("{LINK02}","index.php?page=editarencaminhamento")
                                                                .replace("{LINKLABEL02}", "Encaminhamentos Abertos")
                                                                .replace("{LINK03}","index.php?page=encaminhamentosAndamento")
                                                                .replace("{LINKLABEL03}", "Encaminhamentos em Andamento")
                                                                .replace("{LINK04}","index.php?page=encaminhamentosFechar")
                                                                .replace("{LINKLABEL04}", "Fechar encaminhamento");
                $('.navbar-form').hide();
		service.getClinicas(function(data) {
                    wb.cadastroencaminhamento.render(data);
		});		
                wb.cadastroencaminhamento.bind();
            }else{
                window.location = 'index.php';
            }
                
	},        
	bind: function(){                
	},
	render: function(data){            
          var activity = "";            
          var tamanho = data['clinicas'].length;
          for(x = 0; x < tamanho; x++){
            var item = data['clinicas'][x];
            activity += '<input type="radio" name="clinicas" value="'+item.cid+'" checked/> '+ item.nome + '<br/>';
          }
	  document.getElementById('cadastroencaminhamento').innerHTML = template.ComponentaddEncaminhamentos.replace("{CHECKED}", "checked")
                .replace("{RADIOCLINICA}", activity);    
          $("#encaminhamento-celular").mask("(999) 9999-9999");
          $("#encaminhamento-data").mask("99/99/9999");
          $("#encaminhamento-dtnascimento").mask("99/99/9999");      
          $('.Cadastrar').click(function() {
                var nome = document.getElementById('encaminhamento-nome').value;               
                var celular = document.getElementById('encaminhamento-celular').value;
                //var empresa = document.getElementById('encaminhamento-empresa').value;
                var cargo = document.getElementById('encaminhamento-cargo').value;
                var dataencaminhamento = document.getElementById('encaminhamento-data').value;
                var rg = document.getElementById('encaminhamento-rg').value;
                var dtnascimento = document.getElementById('encaminhamento-dtnascimento').value;    
                var observacao = document.getElementById('observacao').value;
                //Tratamento dos inputs
                if(nome == ""){
                    alert("Preencha o Nome");
                }else if(celular == ""){
                    alert("Preencha o Celular ou número telefônico");                    
                //}//else if(empresa == ""){
                 //   alert("Preencha a Empresa");                    
                }else if(cargo == ""){
                    alert("Preencha o cargo");
                }else if(dataencaminhamento == "__/__/____"){
                    alert("Preencha a data de encaminhamento");
                }else if(rg == ""){
                    alert("Preencha o RG");
                }else if(dtnascimento == "__/__/____"){
                    alert("Preencha a data de nascimento");
                }else{
                    //Tratamento do checkbox
                    var aso = $("input[name='aso']:checked").val();
                    if (aso != "true"){
                        aso = "false";
                    }
                    var colesterol = $("input[name='colesterol']:checked").val();
                    if (colesterol != "true"){
                        colesterol = "false";
                    }                
                    var audiometria = $("input[name='audiometria']:checked").val();
                    if (audiometria != "true"){
                        audiometria = "false";
                    }
                    var triglicerideos = $("input[name='triglicerideos']:checked").val();
                    if (triglicerideos != "true"){
                        triglicerideos = "false";
                    }
                    var hemograma = $("input[name='hemograma']:checked").val();
                    if (hemograma != "true"){
                        hemograma = "false";
                    }                
                    var raiox = $("input[name='raiox']:checked").val();
                    if (raiox != "true"){
                        raiox = "false";
                    }
                    var eas = $("input[name='eas']:checked").val();
                    if (eas != "true"){
                        eas = "false";
                    }
                    var vecto = $("input[name='vecto']:checked").val();
                    if (vecto != "true"){
                        vecto = "false";
                    }
                    var epf = $("input[name='epf']:checked").val();
                    if (epf != "true"){
                        epf = "false";
                    }
                    var tipagem = $("input[name='tipagem']:checked").val();
                    if (tipagem != "true"){
                        tipagem = "false";
                    }
                    var vdrl = $("input[name='vdrl']:checked").val();
                    if (vdrl != "true"){
                        vdrl = "false";
                    }
                    var tgo = $("input[name='tgo']:checked").val();
                    if (tgo != "true"){
                        tgo = "false";
                    }
                    var glicose = $("input[name='glicose']:checked").val();
                    if (glicose != "true"){
                        glicose = "false";
                    }
                    var espiro = $("input[name='espiro']:checked").val();
                    if (espiro != "true"){
                        espiro = "false";
                    }
                    var beta = $("input[name='beta']:checked").val();
                    if (beta != "true"){
                        beta = "false";
                    }
                    var eletro = $("input[name='eletro']:checked").val();
                    if (eletro != "true"){
                        eletro = "false";
                    }
                    var dosagem = $("input[name='dosagem']:checked").val();
                    if (dosagem != "true"){
                        dosagem = "false";
                    }
                    var cardio = $("input[name='cardio']:checked").val();
                    if (cardio != "true"){
                        cardio = "false";
                    }
                    var params = {
                        url: service.getBaseUrl()+'addencaminhamento.php',
                        global: false,
                        type: "POST",
                        data: {
                            "clinica": $("input[name='clinicas']:checked").val(),
                            "identificacao": $("input[name='identificacao']:checked").val(),
                            "nome": nome,
                            "celular": celular,
                            //"empresa": empresa,
                            "cargo": cargo,
                            "dtencaminhamento": dataencaminhamento,
                            "rg": rg,
                            "dtnascimento": dtnascimento,
                            "aso" : aso,
                            "colesterol" : colesterol,
                            "audiometria" : audiometria,
                            "triglicerideos" : triglicerideos,
                            "hemograma" : hemograma,
                            "raiox" : raiox,
                            "vecto" : vecto,
                            "epf" : epf,
                            "tipagem" : tipagem,
                            "vdrl" : vdrl,
                            "tgo" : tgo,
                            "glicose" : glicose,
                            "espiro" : espiro,
                            "beta" : beta,
                            "eletro" : eletro,
                            "dosagem" : dosagem,
                            "cardio" : cardio,
                            "eas" : eas,
                            "observacao" : observacao
                        },
                        dataType: "json",
                        async: true,
                        success: function(data) {
                            //console.log(data);
                            if (data.status == "OK") {
                                alert("Encaminhamento cadastrado com sucesso");
                                document.location.reload();
                            }
                        },
                        error: function(data) {
                            Alert("Cannot connect to the server. Please try again later!");
                        }
                     };                
                     $.ajax(params);	
                    }
                })
	  
	},
	destroy: function(){
	}
};
window.wb = wb;
