function Mostrar()
{

	var contador=0;
	var negativo=1;
	var Numero;
	var Acumulador=0
	var respuesta='si';
	while(respuesta != "no")
	{
		Numero = prompt("Introdusca un numero:");
		Numero = parseInt(Numero);
		if(Numero < 0)
		{
			negativo = negativo * Numero
		}
		else
		{
			Acumulador = Acumulador + Numero
		}
		
		contador = contador + 1;
		respuesta = prompt("Desea continuar?: (Escriba si para continuar y no para salir)");
		while(!(respuesta == "no" || respuesta == "si"))
		{
			alert("Esa no es una respuesta valida");
			respuesta = prompt("Ingrese no para salir y si para volver a ingresar un numero");
		}
	}    


document.getElementById('suma').value=Acumulador;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN