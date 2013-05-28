var wb = window.wb || {};

wb.empresa = {
	init: function(){
		document.getElementById('menuactive').innerHTML = template.componentFooter.replace("{LINK01}","active").replace("{LINK02}", " ").replace("{LINK03}", " ").replace("{LINK04}", " ");
		
		wb.empresa.bind();
		wb.empresa.render();		
	},
	bind: function(){
	},
	render: function(data){    
	  document.getElementById('empresa').innerHTML = template.componentEmpresa.replace("{MAINLABELTITLE}", "O que somos?" )
		  .replace("{MAINTEXT}","A Consultoriasuperciclo é uma empresa administradora de saúde ocupacional, especializada em Engenharia de Segurança do Trabalho e Medicina Ocupacional, que forma com seus clientes uma ampla parceria, objetivando a proteção à saúde de seus colaboradores.")		  
                  .replace("{SECONDLABELTITLE}", "Nossa Missão")
                  .replace("{SECONDMAINTEXT}", "Propiciar aos nossos clientes condições em obter um ambiente de trabalho, seguro, saudável e produtivo a partir da integração de seus colaboradores com a legislação vigente, mantendo continuamente o foco na saúde, segurança do trabalho e meio ambiente.")
                  .replace("{THIRDLABELTITLE}", "Metodologia")
                  .replace("{THIRDMAINTEXT}", "A partir dos programas específicos em saúde ocupacional, realizamos visitas aos locais de trabalho, exames, reuniões, entrevistas, análise de documentação e medições ambientais. Mantendo as empresas em conformidade com as legislações em vigor, proporcionando assim, ambientes saudáveis, higiênicos e seguros. ")
                  .replace("{FOURTHLABELTITLE}", "Nossa meta")
                  .replace("{FOURTHMAINTEXT}", "Disciplinar e regulamentar procedimentos, fornecendo condições de trabalho avaliadas sob o enfoque da saúde, do meio ambiente e dos riscos ocupacionais.")
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
