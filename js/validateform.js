// JavaScript Document

function validar(){
	//validar nome
	d = document.form_contato;
	if (d.name.value == ""){
		alert("Please, introduce yourself.");
		d.name.focus();
		return false;
	}
	//validar email
	if (d.email.value == ""){
		alert("It would be nice to have your email.");
		d.email.focus();
		return false;
	}
	//validar email(verificao de endereco eletronico)
	parte1 = d.email.value.indexOf("@");
	parte2 = d.email.value.indexOf(".");
	parte3 = d.email.value.length;
	if (!(parte1 >= 3 && parte2 >= 6 && parte3 >= 9)) {
		alert("The field " + d.email.name + " must be a valid email!");
		d.email.focus();
		return false;
	}
	
	//validar assunto
	if (d.message.value == ""){
		alert("Please, write me something.");
		d.message.focus();
		return false;
	}

	return true;
}
