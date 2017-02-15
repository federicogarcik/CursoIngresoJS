function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
	while(!(numero > 0 && numero < 9))
	{
		alert("Numero no valido");
		numero = prompt("ingrese un número entre 0 y 10.");
	}
	alert("Numero valido");
}//FIN DE LA FUNCIÓN