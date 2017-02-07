/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var Nombre;//Defino varable Nombre
	var Edad;//Defino varable Edad
	Nombre = document.getElementById('elNombre').value;  //Cargo nombre en la variable
	Edad = document.getElementById('laEdad').value; //Cargo edad en la variable
	alert("Usted se llama " + Nombre + " y tiene " + Edad + " años" );//Muestro nombre y edad
}

