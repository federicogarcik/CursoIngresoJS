/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var LargoRectangulo;
	var AnchoRectangulo;

	LargoRectangulo = document.getElementById('Largo').value;
	AnchoRectangulo = document.getElementById('Ancho').value;
	LargoRectangulo = parseInt(LargoRectangulo);
	AnchoRectangulo = parseInt(AnchoRectangulo);

	var HiloDeAlambre = ((2 * LargoRectangulo) + (2 * AnchoRectangulo)) * 3;
	alert("La cantidad de hilo de alambre a comprar es: " + HiloDeAlambre);

}
function Circulo () 
{
	var Radio;

	Radio = document.getElementById('Radio').value;
	Radio = parseInt(Radio);

	var Alambre = (2 * 3.14 * Radio) * 3;
	alert("La cantidad de hilo de alambre a comprar es: " + Alambre);
	
}
function Materiales () 
{
	var Largo;
	var Ancho;

	Largo = document.getElementById('Largo').value;
	Ancho = document.getElementById('Ancho').value;
	Largo = parseInt(Largo);
    Ancho = parseInt(Ancho);
    //Probar hacer el ejercicio de otras maneras

    var BolsasCal = ((2 * Largo) + (2 * Ancho)) * 3/4;
    var BolsasCemento = ((2 * Largo) + (2 * Ancho)) * 2/4;
    alert("Los materiales necesarioas son: " + BolsasCal + " bolsas de cal y " + BolsasCemento + " bolsas de cemento");
}