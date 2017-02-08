/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var Importe;
	var Resultado;
	//Defino variables

	Importe = document.getElementById('importe').value;
	//Tomo el importe

	Importe = parseInt(Importe);
	//Tranformo Importe a entero

	Resultado = Importe * 0.75;
	document.getElementById('resultado').value = Resultado;
	//Calculo descuento y lo muestro
}
