function validarFecha()
	{ 				    
		var fechaNac = document.getElementById("fechaNac").value;

		
		if(fechaNac.substring(2,3) == "/" && fechaNac.substring(5,6) == "/" && fechaNac.substring(6,10) <= 2000 && fechaNac.substring(6,10).length > 3){
			document.getElementById("fechaNac").style.color = "green";
			
		}else{
			document.getElementById("fechaNac").focus();
			document.getElementById("fechaNac").style.color = "red";
		}
	}
	
function validarNombre()
	{
		var nombre = document.getElementById("nombre").value;
		
		if(nombre.length > 2){
			document.getElementById("nombre").style.color = "green";
		}else{
			document.getElementById("nombre").focus();
			document.getElementById("nombre").style.color = "red"; 
		}
	}
	
function validarApellido()
	{
		var apellido = document.getElementById("apellido").value;
		
		if(apellido.length > 2){
			document.getElementById("apellido").style.color = "green";
		}else{
			document.getElementById("apellido").focus();
			document.getElementById("apellido").style.color = "red"; 
		}
	}
	
function validarRun()
	{
		var run = document.getElementById("run").value;
		
		if(run.length > 9 && run.substring(run.length-2,run.length-1) == "-"){
			document.getElementById("run").style.color = "green";
		}else{
			document.getElementById("run").focus();
			document.getElementById("run").style.color = "red"; 
		}
	}
	
function validarNumero()
	{
		var numero = document.getElementById("telefono").value;
		
		if(numero.length > 7){
			document.getElementById("telefono").style.color = "green";
		}else{
			document.getElementById("telefono").focus();
			document.getElementById("telefono").style.color = "red"; 
		}
	}
	
function validarFecha()
	{
		campo = document.getElementById("email");
		emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
		if (emailRegex.test(campo.value)) {
		document.getElementById("email").style.color = "green";
		}else{
			document.getElementById("email").focus();
			document.getElementById("email").style.color = "red"; 
		}
	}
	
function validarContrasenna()
	{
		var contrasena = document.getElementById("contrasenna").value;
		
		if(contrasena.length > 7){
			document.getElementById("contrasenna").style.color = "green";
		}else{
			document.getElementById("contrasenna").focus();
			document.getElementById("contrasenna").style.color = "red"; 
		}
	}

function compararContrasenna()
	{
		var contrasena = document.getElementById("contrasenna").value;
		var validador = document.getElementById("v_contrasenna").value;

		if(contrasena == validador){
			document.getElementById("contrasenna").style.color = "green";
			document.getElementById("v_contrasenna").style.color = "green";
		}else{
			document.getElementById("contrasenna").focus();
			document.getElementById("contrasenna").style.color = "red";
			document.getElementById("v_contrasenna").style.color = "red";
		}
	}