var wb = window.wb || {};

wb.about = {
	init: function(){
		wb.about.render();
		wb.about.bind();
	},
	bind: function(){
	},
	render: function(data){
	    
	    document.getElementById('about').innerHTML = template.componentIndex.replace("{TITLE}","TITULO 01")
	    .replace("{TEXTONE}","Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste " )
        .replace("{MAINLABELBTN}","Veja Mais")
 		.replace("{TITLEONE}","TITULO 02")
        .replace("{TEXTWO}","Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste ")
 		.replace("{MAINLABELBTNTWO}","Veja Mais")
 		.replace("{TITLETWO}","TITULO 03")
        .replace("{TEXTTREE}","Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste ")
        .replace("{MAINLABELBTNFOUR}","Veja Mais")
        .replace("{TITLETREE}","Titulo 04")
        .replace("{TEXTFOUR}"," Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste Mensagem de teste ")
        .replace("{MAINLABELBTNFIVE}","Veja Mais")
        .replace("{FOOTER}", "@Empresa 2013");
	},
	destroy: function(){
	}	
};
window.wb = wb;
