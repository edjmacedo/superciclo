var wb = window.wb || {};

wb.home = {
	init: function(){
		document.getElementById('menuactive').innerHTML = template.componentFooter.replace("{LINK01}","").replace("{LINK02}", " ").replace("{LINK03}", " ").replace("{LINK04}", " ");

		wb.home.bind();
		wb.home.render();
	},
	bind: function(){
	},
	render: function(data){
	  document.getElementById('home').innerHTML = template.componentIndex.replace("{MAINLABELTITLE}", "A ConsultoriaSuperCiclo" )
		  .replace("{MAINTEXT}","A ConsultoriaSuperCiclo vem cada vez mais se especializando em medicina e segurança do trabalho, desenvolvendo seus trabalhos no assessoramento e apois às empresas no cumprimento das exigências das normas regulamentadores do ministério do trabalho e emprego, além de buscar as melhores soluções para as questões que envolvam a saúde dos colaboradores de nossos clientes e o próprio ambiente em que os mesmos atuam.")
          .replace("{MAINIMG}", "style/img/mainImage.jpg")
		  .replace("{FOOTER}","@ConsultoriaSuperCiclo 2013");

          $('.btn').click(function (){
             wb.login(document.getElementById('Email').value, sha1(document.getElementById('Password').value));
          });
	},
	destroy: function(){
	}
};
window.wb = wb;
