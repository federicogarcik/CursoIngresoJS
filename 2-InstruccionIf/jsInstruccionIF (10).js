function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var NumeroRandom;
	NumeroRandom = Math.floor(Math.random() * 10) + 1;
	alert(NumeroRandom);

	if(NumeroRandom > 8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(NumeroRandom > 4 && NumeroRandom < 9)
	    {
		    alert("APROBADO");
	    }
	    else
	    {
		    alert("Vamos, la proxima se puede");
	    }
    }
}//FIN DE LA FUNCIÓN