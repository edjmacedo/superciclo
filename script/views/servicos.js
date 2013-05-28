var wb = window.wb || {};

wb.servicos = {
	init: function(){
		document.getElementById('menuactive').innerHTML = template.componentFooter.replace("{LINK01}","").replace("{LINK02}", "active").replace("{LINK03}", "").replace("{LINK04}", " ");
		
		wb.servicos.bind();
		wb.servicos.render();		
	},
	bind: function(){
	},
	render: function(data){    
	  document.getElementById('servicos').innerHTML = template.componentEmpresa.replace("{MAINLABELTITLE}", "Assessoria e Consultoria" )
		  .replace("{MAINTEXT}","<ul><li>Implantação e Implementação de CIPA</li><li>Brigada de Incêndio</li>"+
                      "<li>Bombeiro Civil</li><li>EIA – Estudo de Impacto Ambiental</li>"+
                      "<li>RIMA – Relatório de Impacto ao Meio Ambiente</li></ul>")		  
                  .replace("{SECONDLABELTITLE}", "Ocupacional")
                  .replace("{SECONDMAINTEXT}", "<ul><li>PCMSO – Programa de Controle Médico de Saúde Ocupacional</li>"+
                      "<li>PPRA – Programa de Prevenção de Riscos</li><li>LTCAT – Laudo Técnico das Condições do Ambiente de Trabalho</li>"+
                      "<li>PCMAT – Programa das Condições e Meio Ambiente de Trabalho na Indústria de Construção</li>"+
                      "<li>PPR – Programa de Proteção Respiratória</li><li>PCA – Programa de Conservação Auditiva</li>"+
                      "<li>PPA – Programa de Proteção Ambiental</li><li>LI – Laudo de Insalubridade</li>"+
                      "<li>LP – Laudo de Periculosidade</li><li>PAE – Programa de Ação Emergencial</li>"+
                      "<li>PPP – Perfil Profissional Profissiográfico</li><li>Laudos Periciais Assistenciais</li>"+
                      "<li>Laudos Ergonômicos</li></ul>")
                  .replace("{THIRDLABELTITLE}", "Cursos, Treinamentos e Palestras")
                  .replace("{THIRDMAINTEXT}", "<ul><li>Brigada de Incêndio</li>"+
                      "<li>NR-10</li><li>NR-18</li>"+
                      "<li>CIPA</li>"+
                      "<li>Trabalho em Altura</li><li>Espaço Confinado</li>"+
                      "<li>Primeiros Socorros</li><li>Instrumentação para o Monitoramento Ambiental – Ruído, Calor e Luximetria</li>"+
                      "<li>OHSAS 18001:2007 – Interpretação dos Requisitos</li><li>Método ADC (Árvore de Causas) para Análise de Acidentes</li>"+
                      "<li>Análise Preliminar de Riscos</li><li>Capacitação – Nova NR-12</li>"+
                      "<li>Plano de Ação – 5W2H</li><li>Conscientização quanto ao Resíduo, Poluição e Coleta Seletiva</li>"+
                      "<li>Básico de Sobrevivência na Selva</li></ul>")                  
                  .replace("{MAINIMG}", "style/img/Logo.png")
		  .replace("{FOOTER}","@ConsultoriaSuperCiclo 2013");
         $('.btn').click(function (){
             wb.login(document.getElementById('Email').value, sha1(document.getElementById('Password').value));
         });
	},
	destroy: function(){
	}
};
window.wb = wb;
