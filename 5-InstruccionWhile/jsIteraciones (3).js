function Mostrar()
{

var clave = prompt("ingrese el número clave.");

while(clave != "utn750" )
{
	alert("clave incorrecta")
	clave = prompt("ingrese el número clave.");
}
alert("clave correcta")


/* FORMA CON IF MENOS EFICAZ, NO USAR IF!!!
if (clave == "utn750")
{
	alert("clave correcta");
}
else
{
	while(clave != "utn750")
	{
		alert("su clave no es valida");
		clave = prompt("ingrese el numero calve.");
	}
	alert("clave correcta");
}
*/


}//FIN DE LA FUNCIÓN
