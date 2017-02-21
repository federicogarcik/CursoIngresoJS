function Mostrar()
{

	var contador=0;
	// declarar variables
	var Numero;
	var Max;
	var Min;
	var respuesta='si';

	while(respuesta!='no')
	{
		Numero = prompt("Ingrese un numero: ");
		Numero = parseInt(Numero);
		if(contador == 0)
		{
			Max = Numero;
		    Min = Numero;
	    }
	    else
	    {
	    	if(Numero > Max)
	    	{
	    		Max = Numero;
	    	}
	    	if(Numero < Min)
	    	{
	    		Min = Numero;
	    	}	
	    }
	    document.getElementById('maximo').value = Max;
	    document.getElementById('minimo').value = Min;
	    contador = contador + 1;
	    respuesta = prompt("Quiere continuar ingresando numeros? ");
	    while(!(respuesta == "no" || respuesta == "si"))
		{
			alert("Esa no es una respuesta valida");
			respuesta = prompt("Ingrese no para salir y si para volver a ingresar un numero");
		} 
	}




}//FIN DE LA FUNCIÓN