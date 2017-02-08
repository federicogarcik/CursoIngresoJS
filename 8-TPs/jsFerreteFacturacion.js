/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	//Defino variables

	PrecioUno = document.getElementById('PrecioUno').value;
	PrecioDos = document.getElementById('PrecioDos').value;
	PrecioTres = document.getElementById('PrecioTres').value;
	//Tomo precios

	PrecioUno = parseInt(PrecioUno);
	PrecioDos = parseInt(PrecioDos);
	PrecioTres = parseInt(PrecioTres);
	//Transaformo variables a enteros

	var Resultado;
	Resultado = PrecioUno + PrecioDos + PrecioTres;
	alert("La suma de los precios es " + Resultado);
	//Calculo y muestro precio

}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	//Defino variables

	PrecioUno = document.getElementById('PrecioUno').value;
	PrecioDos = document.getElementById('PrecioDos').value;
	PrecioTres = document.getElementById('PrecioTres').value;
	//Tomo precios

	PrecioUno = parseInt(PrecioUno);
	PrecioDos = parseInt(PrecioDos);
	PrecioTres = parseInt(PrecioTres);
	//Transaformo variables a enteros

	var Promedio;
	Promedio = (PrecioUno + PrecioDos + PrecioTres) / 3;
	alert("El promedio es " + Promedio);
	//Calculo y muestro promedio
	
}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	//Defino variables

	PrecioUno = document.getElementById('PrecioUno').value;
	PrecioDos = document.getElementById('PrecioDos').value;
	PrecioTres = document.getElementById('PrecioTres').value;
	//Tomo precios

	PrecioUno = parseInt(PrecioUno);
	PrecioDos = parseInt(PrecioDos);
	PrecioTres = parseInt(PrecioTres);
	//Transaformo variables a enteros

	var PrecioFinal;
	PrecioFinal = (PrecioUno + PrecioDos + PrecioTres) * 1.21;
	alert("El precio final es " + PrecioFinal);
	//Calculo y muestro el precio final
}