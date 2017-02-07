/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var Nombre; //Defino variable
	Nombre = prompt("Por favor ingresa tu nombre"); //Ingreso nombre en variable
	document.getElementById('elNombre').value = Nombre;	

}

