function calculoCuadrado(){
	var lado = document.getElementById("cua_lado").value; //extraigo el número del input
	var area = lado * lado
	var perimetro = 4 * lado
	document.getElementById("titulo_escogido").innerHTML = "Ha escogido cuadrado.";
	document.getElementById("lis_cua_lado").style.display="inline"; //muestro el punto de la lista escondido
	document.getElementById("lis_cua_lado").innerHTML = "El area es =  "+ area;
  document.getElementById("lis_cua_lado2").style.display="block";
	document.getElementById("lis_cua_lado2").innerHTML = "El perimetro es =  "+ perimetro

}
function calculoRectangulo(){

	var base = document.getElementById("rec_base").value;
	var altura = document.getElementById("rec_altura").value;
	var area = base * altura
	var perimetro = 2 * base + 2 *altura
	document.getElementById("titulo_escogido").innerHTML = "Ha escogido rectangulo";
	document.getElementById("lis_rec1").style.display = "block";
	document.getElementById("lis_rec1").innerHTML = "El area del rectangulo es = "+area;
  document.getElementById("lis_rec2").style.display = "block";
	document.getElementById("lis_rec2").innerHTML =  "El perimetro del rectangulo es = "+perimetro;

}
function calculoTriangulo(){

	var base = document.getElementById("tri_base").value;
	var altura = document.getElementById("tri_altura").value;
	var hipotenusa = document.getElementById("tri_hipotenusa").value;
	var area = base * altura/2
	var perimetro = base+altura+hipotenusa

	document.getElementById("titulo_escogido").innerHTML = "Ha escogido triangulo";
	document.getElementById("lis_tria1").style.display = "block";
	document.getElementById("lis_tria1").innerHTML = "El area del triangulo es  = "+ area;
	document.getElementById("lis_tria2").style.display = "block";
	document.getElementById("lis_tria2").innerHTML = "El perimetro del triangulo es = "+ perimetro;
	}
