/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Dividendo;
	var divisor;
	var Resto;
	var Resultado;
	/*
	Defino las variables que voy a utlizar:
	Dividendo: Numero que es dividido
	Divisor: numero que divide
	Resto: numero sobrante de las division
	Resultado: Resultado de la division
	*/

	Dividendo = document.getElementById('numeroDividendo').value;
	Divisor = document.getElementById('numeroDivisor').value;
	//Ingreso  valor en las variables

	Dividendo = parseInt(Dividendo);
	Divisor = parseInt(Divisor);
	//Tranformo las variables a valores enteros

	Resultado =  Dividendo % Divisor;
	//Divido la variable Dividendo por la variable Divisor

	alert("El resto es " + Resultado);
	//Muestro el resot por alert
}
