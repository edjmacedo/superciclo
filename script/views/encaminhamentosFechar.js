var wb = window.wb || {};

wb.encaminhamentosFechar = {
	init: function(){
        if (wb.user != null && wb.user != 'undefined' && wb.tipo == "admin") { 
            document.getElementById('menuactive').innerHTML = template.componentLogged.replace("{LINK03}","active");
		    wb.encaminhamentosFechar.bind();
		    wb.encaminhamentosFechar.render();	
            service.getEncaminhamentosFechado(function(data) {
                wb.encaminhamentosFechar.renderEncaminhamentos(data);
    		});
            service.getClinicas(function(data) {
                wb.encaminhamentosFechar.renderEncaminhamentos(data);
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
            document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE04}", "active")
                                                                .replace("{LINK01}", "index.php?page=cadastroencaminhamento")
                                                                .replace("{LINKLABEL}", "Cadastro de Encaminhamentos")
                                                                .replace("{LINK02}","index.php?page=editarencaminhamento")
                                                                .replace("{LINKLABEL02}", "Encaminhamentos Abertos")
                                                                .replace("{LINK03}","index.php?page=encaminhamentosAbertos")
                                                                .replace("{LINKLABEL03}", "Encaminhamentos em Andamento")
                                                                .replace("{LINK04}","index.php?page=encaminhamentosFechar")
                                                                .replace("{LINKLABEL04}", "Histórico de encaminhamentos");
	},
        renderEncaminhamentos: function(data){
            var activity = "";            
            var tamanho = data['encaminhamentos'].length;
            for(x = 0; x < tamanho; x++){
                var item = data['encaminhamentos'][x];
                activity += template.listfencaminhamentos.replace("{EDITAR}", item.eid)
                    .replace("{NOMECLIENTE}", item.nome)
                    .replace("{TIPO}", item.identificacao)
                    .replace("{EMPRESA}", item.empresa)
                    .replace("{DTENCAMINHAMENTO}", item.data)
                    .replace("{STATUS}", item.status)
                    .replace("{CLINICA}", item.clinicaNome);
            }
            document.getElementById('encaminhamentosFechar').innerHTML = template.Componentremoveuser.replace("{TITLE}", "Histórico de Encaminhamentos");//activity;
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
                        document.getElementById('secondmenu').innerHTML = template.CompenentMenuLeft.replace("{LINKACTIVE04}", "active")
                                                                .replace("{LINK01}", "index.php?page=cadastroencaminhamento")
                                                                .replace("{LINKLABEL}", "Cadastro de Encaminhamentos")
                                                                .replace("{LINK02}","index.php?page=editarencaminhamento")
                                                                .replace("{LINKLABEL02}", "Encaminhamentos Abertos")
                                                                .replace("{LINK03}","index.php?page=encaminhamentosAndamento")
                                                                .replace("{LINKLABEL03}", "Encaminhamentos em Andamento")
                                                                .replace("{LINK04}","index.php?page=encaminhamentosFechar")
                                                                .replace("{LINKLABEL04}", "Histórico de Encaminhamentos");
                        
                        var activity = "";
                        var tamanho = data['encaminhamento'].length;
                        var tag = "";  
                        var ntag = "";
                        var nClinica = "";
                        for(x = 0; x < 1; x++){                           
                            var item = data['encaminhamento'][x];
                            var radioChecked = item.identificacao;
                            nClinica = item.clinica;
                            if(radioChecked == "admissional"){
                                tag = "{CHECKED}";
                                radioChecked = "<p>Exame Admissional</p>";
                            }
                            if(radioChecked == "demissional"){
                                tag = "{CHECKED02}";
                                radioChecked = "<p>Exame Demissional</p>";
                            }
                            if(radioChecked == "retornotrabalho"){
                                tag = "{CHECKED03}";
                                radioChecked = "<p>Exame de Retorno ao Trabalho</p>";
                            }
                            if(radioChecked == "mudancafuncao"){
                                tag = "{CHECKED04}";
                                radioChecked = "<p>Exame de Mudança de Função</p>";
                            }
                            if(radioChecked == "periodico"){
                                tag = "{CHECKED05}";
                                radioChecked = "<p>Exame Periodico</p>";
                            }
                            if(radioChecked == "particular"){
                                tag = "{CHECKED06}";
                                radioChecked = "<p>Exame Particular</p>";
                            }
                            var aso = "";
                            if(item.aso == "true"){
                                aso = "<li>ASO - EXAME CLÍNICO</li><br/>";
                            }
                            var audiometria = "";
                            if(item.audiometria == "true"){
                                audiometria = "<li>AUDIOMETRIA</li><br/>";
                            }
                            var hemograma = "";
                            if(item.hemograma == "true"){
                                hemograma = "<li>HEMOGRAMA</li><br/>";
                            }
                            var eas = "";
                            if(item.eas == "true"){
                                eas = "<li>EAS - URINA</li><br/>";
                            }
                            var epf = "";
                            if(item.epf == "true"){
                                epf = "<li>EPF - FEZES</li><br/>";
                            }
                            var vdrl = "";
                            if(item.vdrl == "true"){
                                vdrl = "<li>VDRL</li><br/>";
                            }
                            var glicose = "";
                            if(item.glicose == "true"){
                                glicose = "<li>GLICOSE</li><br/>";
                            }
                            var betahcg = "";
                            if(item.betahcg == "true"){
                                betahcg = "<li>BETA HCG</li><br/>"
                            }
                            var dosagem = "";
                            if(item.dosagem == "true"){
                                dosagem = "<li>DOSAGEM</li><br/>"
                            }
                            var colesterol = "";
                            if(item.colesterol == "true"){
                                colesterol = "<li>COLESTEROL</li><br/>"
                            }
                            var triglicerideos = "";
                            if(item.triglicerideos == "true"){
                                triglicerideos = "<li>TRIGLICERIDEOS</li><br/>"
                            }
                            var raiox = "";
                            if(item.raiox == "true"){
                                raiox = "<li>RAIO X COLUNA CERVICAL LOMBO SACRA</li><br/>"
                            }
                            var vectoeletro = "";
                            if(item.vectoeletro == "true"){
                                vectoeletro = "<li>VECTOELETRONISTAGMOGRAFIA</li><br/>"
                            }
                            var tipagem = "";
                            if(item.tipagem == "true"){
                                tipagem = "<li>TIPAGEM SANGUINEA</li><br/>"
                            }
                            var tgo = "";
                            if(item.tgo == "true"){
                                tgo = "<li>TGO/TGP</li><br/>"
                            }
                            var espirometria = "";
                            if(item.espirometria == "true"){
                                espirometria = "<li>ESPIROMETRIA</li><br/>"
                            }
                            var eletroencefalo = "";
                            if(item.eletroencefalo == "true"){
                                eletroencefalo = "<li>ELETROENCEFALOGRAMA</li><br/>"
                            }
                            var eletrocardio = "";
                            if(item.eletrocardio == "true"){
                                eletrocardio = "<li>ELETROCARDIOGRAMA</li><br/>"
                            }
                            var nome = item.nome;                            
                            activity += template.ComponentedtVisualizarEncaminhamentos.replace(tag, radioChecked)
                                .replace("{CHECKED02}", ntag)
                                .replace("{CHECKED03}", ntag)
                                .replace("{CHECKED04}", ntag)
                                .replace("{CHECKED05}", ntag)
                                .replace("{CHECKED06}", ntag)
                                .replace("{VALUENOME}", nome)
                                .replace("{VALUECEL}", item.celular)
                                .replace("{VALUEEMPRESA}", item.empresa)
                                .replace("{VALUECARGO}", item.cargo)
                                .replace("{VALUEDT}", item.data)
                                .replace("{VALUERG}", item.rg)
                                .replace("{VALUENASC}", item.dt_nascimento)
                                .replace("{CHK}", aso )
                                .replace("{CHK02}", audiometria)
                                .replace("{CHK03}", hemograma)
                                .replace("{CHK04}", eas)
                                .replace("{CHK05}", epf)
                                .replace("{CHK06}", vdrl)
                                .replace("{CHK07}", glicose)
                                .replace("{CHK08}", betahcg)
                                .replace("{CHK09}", dosagem)
                                .replace("{CHK10}", colesterol)
                                .replace("{CHK11}", triglicerideos)
                                .replace("{CHK12}", raiox)
                                .replace("{CHK13}", vectoeletro)
                                .replace("{CHK14}", tipagem)
                                .replace("{CHK15}", tgo)
                                .replace("{CHK16}", espirometria)
                                .replace("{CHK17}", eletroencefalo)
                                .replace("{CHK18}", eletrocardio)
                                .replace("{OBSERVACAO}", item.observacao);
                        }          
                                                
                        document.getElementById('list-itens').innerHTML = activity;
                        
                        $('.Atualizar').click(function(){                                                                                            
                                var params = {
                                    url: service.getBaseUrl()+'edtencaminhamentoAndamento.php',
                                    global: false,
                                    type: "POST",
                                    data: {
                                        "eid": eid,                                        
                                        "status": document.getElementById('encaminhamento-status').value
                                    },
                                    dataType: "json",
                                    async: true,
                                    success: function(data) {
                                        //console.log(data);
                                        if (data.status == "OK") {
                                            alert("Encaminhamento fechado com sucesso");
                                            document.location.reload();
                                        }
                                    },
                                    error: function(data) {
                                        Alert("Cannot connect to the server. Please try again later!");
                                    }
                                };                
                                $.ajax(params);	
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
