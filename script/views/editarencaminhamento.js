var wb = window.wb || {};

wb.editarencaminhamento = {
	init: function(){
        if (wb.user != null && wb.user != 'undefined' && wb.tipo == "admin") { 
            document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK03}","active");
		    wb.editarencaminhamento.bind();
		    wb.editarencaminhamento.render();	
            service.getEncaminhamentos(function(data) {
                wb.editarencaminhamento.renderEncaminhamentos(data);
    		});
            service.getClinicas(function(data) {
                wb.cadastroencaminhamento.renderEncaminhamentos(data);
    		});
        }else{
            window.location = 'index.php';
        }
	},
	bind: function(){             
            $('.navbar-form').hide(); 
            $("#encaminhamento-celular").mask("(999) 9999-9999");
            $("#encaminhamento-data").mask("99/99/9999");
            $("#encaminhamento-dtnascimento").mask("99/99/9999");                        
	},
	render: function(data){	                     	  
            document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE02}", "active")
                                                                .replace("{LINK01}", "index.php?page=cadastroencaminhamento")
                                                                .replace("{LINKLABEL}", "Cadastro de Encaminhamentos")
                                                                .replace("{LINK02}","index.php?page=editarencaminhamento")
                                                                .replace("{LINKLABEL02}", "Encaminhamentos Abertos")
                                                                .replace("{LINK03}","index.php?page=encaminhamentosAndamento")
                                                                .replace("{LINKLABEL03}", "Encaminhamentos em Andamento")
                                                                .replace("{LINK04}","index.php?page=encaminhamentosFechar")
                                                                .replace("{LINKLABEL04}", "Histórico de encaminhamento");
	},
        renderEncaminhamentos: function(data){
            var activity = "";            
            var tamanho = data['encaminhamentos'].length;
            for(x = 0; x < tamanho; x++){
                var item = data['encaminhamentos'][x];
                activity += template.listencaminhamentos.replace("{EDITAR}", item.eid)
                    .replace("{NOMECLIENTE}", item.nome)
                    .replace("{TIPO}", item.identificacao)
                    .replace("{EMPRESA}", item.empresa)
                    .replace("{DTENCAMINHAMENTO}", item.data)
                    .replace("{STATUS}", item.status)
                    .replace("{CLINICA}", item.clinicaNome);
            }
            document.getElementById('editarencaminhamento').innerHTML = template.Componentremoveuser.replace("{TITLE}", "Editar Encaminhamentos");//activity;
            document.getElementById('list-itens').innerHTML = activity
            $('.editar-encaminhamento').click( function() {
                var eid = $(this).attr("eid");
                var params = {
                    url: service.getBaseUrl()+'geteditarEncaminhamento.php',
                    global: false,
                    type: "POST",
                    data: {
                        "eid": eid
                    },
                    dataType: "json",
                    async: true,
                    success: function(data) {                                             
                        document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE02}", "active")
                                                                .replace("{LINK01}", "index.php?page=cadastroencaminhamento")
                                                                .replace("{LINKLABEL}", "Cadastro de Encaminhamentos")
                                                                .replace("{LINK02}","index.php?page=editarencaminhamento")
                                                                .replace("{LINKLABEL02}", "Encaminhamentos Abertos")
                                                                .replace("{LINK03}","index.php?page=encaminhamentosAndamento")
                                                                .replace("{LINKLABEL03}", "Encaminhamentos em Andamento")
                                                                .replace("{LINK04}","index.php?page=encaminhamentosFechar")
                                                                .replace("{LINKLABEL04}", "Fechar encaminhamento");
                        
                        var activity = "";
                        var tamanho = data['encaminhamento'].length;
                        var tag = "";  
                        var nClinica = "";
                        for(x = 0; x < 1; x++){                           
                            var item = data['encaminhamento'][x];
                            var radioChecked = item.identificacao;
                            nClinica = item.clinica;
                            var observacao = item.observacao;
                            if(radioChecked == "admissional"){
                                tag = "{CHECKED}";
                            }
                            if(radioChecked == "demissional"){
                                tag = "{CHECKED02}";
                            }
                            if(radioChecked == "retornotrabalho"){
                                tag = "{CHECKED03}";
                            }
                            if(radioChecked == "mudancafuncao"){
                                tag = "{CHECKED04}";
                            }
                            if(radioChecked == "periodico"){
                                tag = "{CHECKED05}";
                            }
                            if(radioChecked == "particular"){
                                tag = "{CHECKED06}";
                            }
                            if(item.aso == "true"){
                                var aso = "checked"
                            }
                            if(item.audiometria == "true"){
                                var audiometria = "checked"
                            }
                            if(item.hemograma == "true"){
                                var hemograma = "checked"
                            }
                            if(item.eas == "true"){
                                var eas = "checked"
                            }
                            if(item.epf == "true"){
                                var epf = "checked"
                            }
                            if(item.vdrl == "true"){
                                var vdrl = "checked"
                            }
                            if(item.glicose == "true"){
                                var glicose = "checked"
                            }
                            if(item.betahcg == "true"){
                                var betahcg = "checked"
                            }
                            if(item.dosagem == "true"){
                                var dosagem = "checked"
                            }
                            if(item.colesterol == "true"){
                                var colesterol = "checked"
                            }
                            if(item.triglicerideos == "true"){
                                var triglicerideos = "checked"
                            }
                            if(item.raiox == "true"){
                                var raiox = "checked"
                            }
                            if(item.vectoeletro == "true"){
                                var vectoeletro = "checked"
                            }
                            if(item.tipagem == "true"){
                                var tipagem = "checked"
                            }
                            if(item.tgo == "true"){
                                var tgo = "checked"
                            }
                            if(item.espirometria == "true"){
                                var espirometria = "checked"
                            }
                            if(item.eletroencefalo == "true"){
                                var eletroencefalo = "checked"
                            }
                            if(item.eletrocardio == "true"){
                                var eletrocardio = "checked"
                            }
                            var nome = item.nome;                            
                            activity += template.ComponentEditEncaminhamentos.replace(tag, "checked")
                                .replace("{VALUENOME}", nome)
                                .replace("{VALUECEL}", item.celular)
                                .replace("{VALUEEMPRESA}", item.empresa)
                                .replace("{VALUECARGO}", item.cargo)
                                .replace("{VALUEDT}", item.data)
                                .replace("{VALUERG}", item.rg)
                                .replace("{VALUENASC}", item.dt_nascimento)
                                .replace("{CHK}", aso)
                                .replace("{CHK02}", "AUDIOMETRIA")
                                .replace("{CHK03}", hemograma)
                                .replace("{CHK04}", eas)
                                .replace("{CHK05}", epf)
                                .replace("{CHK06}", vdrl)
                                .replace("{CHK07}", glicose)
                                .replace("{CHK08}", betahcg)
                                .replace("{CHK09}", dosagem)
                                .replace("{CHK10}", colesterol)
                                .replace("{CHK11}", "TRIGLICERÍDEOS")
                                .replace("{CHK12}", raiox)
                                .replace("{CHK13}", vectoeletro)
                                .replace("{CHK14}", tipagem)
                                .replace("{CHK15}", tgo)
                                .replace("{CHK16}", espirometria)
                                .replace("{CHK17}", eletroencefalo)
                                .replace("{CHK18}", eletrocardio)
                                .replace("{OBSERVACAO}", observacao);;
                        }          
                        var radioClinica = "";
                        var tamanho = data['encaminhamento'].length;
                        for(x = 1; x < tamanho; x++){
                            var item = data['encaminhamento'][x];
                            //alert("Numero da clinica: " + nClinica);
                            //alert("Item: " + item.cid);
                            //if( nClinica == item.cid ){
                                //radioClinica += '<input type="radio" name="clinicas" value="'+item.cid+'" checked/> '+ item.nome + '<br/>';
                                //radioClinica += '<label>'+ item.nome + '<label>';
                               // alert("Entrei");
                            //}else{
                             //   radioClinica += '<input type="radio" name="clinicas" value="'+item.cid+'" /> '+ item.nome + '<br/>';
                            //}
                        }
                        document.getElementById('list-itens').innerHTML = activity;//.replace("{RADIOCLINICA}", item.nome);
                        
                        $('.Atualizar').click(function(){                            
                            var nome = document.getElementById('encaminhamento-nome').value;               
                            var celular = document.getElementById('encaminhamento-celular').value;
                            var empresa = document.getElementById('encaminhamento-empresa').value;
                            var cargo = document.getElementById('encaminhamento-cargo').value;
                            var dataencaminhamento = document.getElementById('encaminhamento-data').value;
                            var rg = document.getElementById('encaminhamento-rg').value;
                            var dtnascimento = document.getElementById('encaminhamento-dtnascimento').value;       
                            //Tratamento dos inputs
                            if(nome == ""){
                                alert("Preencha o Nome");
                            }else if(celular == ""){
                                alert("Preencha o Celular ou número telefônico");                    
                            }else if(empresa == ""){
                                alert("Preencha a Empresa");                    
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
                                    url: service.getBaseUrl()+'edtencaminhamento.php',
                                    global: false,
                                    type: "POST",
                                    data: {
                                        "eid": eid,
                                        "identificacao": $("input[name='identificacao']:checked").val(),
                                        "nome": nome,
                                        "celular": celular,
                                        "empresa": empresa,
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
                                        "status": document.getElementById('encaminhamento-status').value
                                    },
                                    dataType: "json",
                                    async: true,
                                    success: function(data) {
                                        //console.log(data);
                                        if (data.status == "OK") {
                                            alert("Encaminhamento editado com sucesso");
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
                    error: function(data) {
                      Alert("Cannot connect to the server. Please try again later!");
                    }
                };                
                $.ajax(params);	    
            });
                        
        },
	destroy: function(){
	}
};
window.wb = wb;
