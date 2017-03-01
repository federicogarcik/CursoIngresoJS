function Mostrar()
{
	var Respuesta = "si";
	var Numero;
	var ContadorPositivos = 0;
	var ContadorNumeros = 0;
	var SumadorNumeros = 0;
	var NumeroMaximo;
	var NumeroMinimo;


	while(Respuesta != "no")
	{
		Numero = prompt("Ingrese un numero positivo");
		Numero = parseInt(Numero);
		while(Numero < 0)
		{
			alert("Ese no es un numero positivo");
			Numero = prompt("Ingrese un numero positivo");
		}


		if(ContadorNumeros == 0)
		{
			NumeroMinimo = Numero
			NumeroMaximo = Numero
		}
		else
		{
			if(Numero > NumeroMaximo)
			{
				NumeroMaximo = Numero;
			}
			if(Numero < NumeroMinimo)
			{
				NumeroMinimo = Numero;
			}
		}	

		
	
	

		if(Numero % 2 == 0)
		{
			ContadorPositivos++;
		}

		ContadorNumeros++;
		SumadorNumeros = SumadorNumeros + Numero;



		Respuesta = prompt("SI desea continuar ingrese si, si desea salir ingrese no");
		while(!(Respuesta == "si" || Respuesta == "no"))
		{
			alert("Esa no es una respuesta valida");
			Respuesta = prompt("Si desea continuar ingrese si, si desea salir ingrese no");
		}
	}

	var Promedio = SumadorNumeros / ContadorNumeros;

	document.write("El promedio de numeros es " + Promedio + " <BR>");
	document.write("La suma de todos los numeros es " + SumadorNumeros + "<BR>");
	document.write("El numero maximo es " + NumeroMaximo + "<BR>");
	document.write("El numero minimo es " + NumeroMinimo + "<BR>");




}//FIN DE LA FUNCIÓN