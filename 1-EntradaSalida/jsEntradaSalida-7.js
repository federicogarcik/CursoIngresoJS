/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*Falta buscar otras maneras de resolverlo 
y comentar algunas cosas */
function sumar()
{	
	var NumeroUno = document.getElementById('numeroUno').value;
    var NumeroDos = document.getElementById('numeroDos').value;
	//Defino variables y tomo datos por id

    var NumeroUno = parseInt(NumeroUno);
    var NumeroDos = parseInt(NumeroDos);
	
	var Resultado = NumeroUno + NumeroDos;
	alert("la suma es " + Resultado);
}

function restar()
{
	var NumeroUno = document.getElementById('numeroUno').value;
    var NumeroDos = document.getElementById('numeroDos').value;
	//Defino variables y tomo datos por id

    var NumeroUno = parseInt(NumeroUno);
    var NumeroDos = parseInt(NumeroDos);
	
	var ResultadoDos = NumeroUno - NumeroDos;
	alert("la resta es " + ResultadoDos);
}

function multiplicar()
{ 
	var NumeroUno = document.getElementById('numeroUno').value;
    var NumeroDos = document.getElementById('numeroDos').value;
	//Defino variables y tomo datos por id

    var NumeroUno = parseInt(NumeroUno);
    var NumeroDos = parseInt(NumeroDos);

    var ResultadoTres = NumeroUno * NumeroDos;
    alert("la multiplicacion es " + ResultadoTres);
}

function dividir()
{
	var NumeroUno = document.getElementById('numeroUno').value;
    var NumeroDos = document.getElementById('numeroDos').value;
	//Defino variables y tomo datos por id

    var NumeroUno = parseInt(NumeroUno);
    var NumeroDos = parseInt(NumeroDos);
	
	var ResultadoCuatro = NumeroUno / NumeroDos;
	alert("la division es " + ResultadoCuatro);
}

