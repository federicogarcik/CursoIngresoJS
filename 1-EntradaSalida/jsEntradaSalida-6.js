/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var NumeroUno = document.getElementById('numeroUno').value;
	var NumeroDos = document.getElementById('numeroDos').value;
	//Defino variables y tomo numeros por ID
	
	NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
	//Transformo variables a enteros

	var Resultado = NumeroUno + NumeroDos;
	//Almaceno resultado en variable

	alert("la suma es " + Resultado);

	/*
	var Resultado = parseInt(NumeroUno); + parseInt(NumeroDos);
	alert("la sume es " + Resultado);

	alert("la suma es " + (parseInt(NumeroUno) + parseInt(NumeroDos)));

    NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
	alert("la suma es " + NumeroUno + NumeroDos)
	*/



}

