/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var NumeroUno;//Defino variable del primer numero
	var NumeroDos;//Defino variable del segundo numero
	var Resultado;//Defino variable de las suma de los numeros uno y dos
	
	NumeroUno = document.getElementById('numeroUno').value;//Tomo datos por ID en la variable "Numero1"
	NumeroDos = document.getElementById('numeroDos').value;//Tomo datos por ID en la variable "Numero2"
	NumeroUno = parseInt(NumeroUno); //Tranformo variable a un entero
	NumeroDos = parseInt(NumeroDos); //Tranformo varable a un entero
	
	Resultado = NumeroUno + NumeroDos ;//Sumo Variables y almaceno en una variable
	
	alert("La suma es " + Resultado);//Muestro el resultado por alert 
}

