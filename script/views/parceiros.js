var wb = window.wb || {};

wb.parceiros = {
	init: function(){
		document.getElementById('menuactive').innerHTML = template.componentFooter.replace("{LINK01}","").replace("{LINK02}", " ").replace("{LINK03}", "active").replace("{LINK04}", " ");
		
		wb.parceiros.bind();
		wb.parceiros.render();		
	},
	bind: function(){
	},
	render: function(data){    
	  document.getElementById('parceiros').innerHTML = template.ComponentParceiros;                  
          $('.btn').click(function (){
             wb.login(document.getElementById('Email').value, document.getElementById('Password').value); 
          });           
	},
	destroy: function(){
	}
};
window.wb = wb;
