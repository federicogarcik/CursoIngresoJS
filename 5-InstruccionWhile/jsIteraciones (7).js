function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var Numero;

	while(respuesta != "no")
	{
		Numero = prompt("Introdusca un numero:");
		Numero = parseInt(Numero);
		acumulador = acumulador + Numero;
		contador = contador + 1;
		respuesta = prompt("Desea continuar?: (Escriba si para continuar y no para salir)");
		while(!(respuesta == "no" || respuesta == "si"))
		{
			alert("Esa no es una respuesta valida");
			respuesta = prompt("Ingrese no para salir y si para volver a ingresar un numero");
		}
	}    

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN