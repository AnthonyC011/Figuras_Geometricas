function calculoCuadrado(){
	var lado = document.getElementById("cua_lado").value; //extraigo el número del input
	document.getElementById("titulo_escogido").innerHTML = "Ha escogido cuadrado.";
	document.getElementById("lis_cua_lado").style.display="inline"; //muestro el punto de la lista escondido
	document.getElementById("lis_cua_lado").innerHTML = "El lado es: "+ lado;
}