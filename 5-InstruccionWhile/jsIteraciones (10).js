function Mostrar()
{

	/*
	Iteracion hasta que el usuario quiera
	alert("Funciona");
    */
    var Respuesta = "si";
    var Nota;
    var Contador = 0;
    var SumaNota = 0;
    var PromedioNota;
    var Edad;
    var Nombre;
    var Sexo;
    var MasViejo;
    var EdadMasViejo;
    var ContadorMujeresApro = 0;

    while(Respuesta == "si")
    {
        Nota = prompt("Por favor ingrese su nota");
        Nota = parseInt(Nota);
        while(Nota < 0 || Nota > 10)
        {
        	Nota = prompt("Por favor ingrese su nota");
            Nota = parseInt(Nota);
        }
        SumaNota = SumaNota + Nota;

        Edad = prompt("Por favor ingrese su edad");
        Edad = parseInt(Edad);
        //Validar Edad sexo y nombre
        Nombre = prompt("Por favor ingrese su nombre");
        Sexo = prompt("Por favor introdusca su sexo");
        /*Aca termino la carga y validacion de datos  
        Comenzamos a hacer las operaciones necesarias*/

        if(Contador == 0)
        {
        	MasViejo = Nombre;
        	EdadMasViejo = Edad;
        }
        else
        {
        	if(Edad > EdadMasViejo)
        	{
        		MasViejo = Nombre;
        		EdadMasViejo = Edad;

        	}
        }
        if(Sexo == "f" && Nota > 3)
        {
        	ContadorMujeresApro = ContadorMujeresApro + 1
        }
        /*
        1-Cantidad de mujeres aprobadas
        2-Cantidad de hombres mayores a 25 aprobados
        3-Cantidad de mujeres menores a 20 años
        4-El nombre de la mujer con mejor nota
        5-El nombre del hombre con mejor nota
        6-Promedio de nota de los hombres
        7-Promedio de nota de las mujeres
        8-Porcentaje de aprobados versus porcentaje de desaprobados
        9-El sexo y el nombre de la primera persona que saque diez
        */

      
        


        Contador++;
        Respuesta = prompt("Ingrese la letra s para continuar");
    }
    PromedioNota = SumaNota / Contador;
    console.log(PromedioNota);
    document.write("La cantidad de mujeres aprobadas es : " + ContadorMujeresApro);


/*
	var contador = 0;
	var SumaNegativos = 0;
	var Numero;
	var ContadorNegativos = 0;
	var SumaPositivos = 0;
	var ContadorPositivos = 0;
	var ContadorCeros = 0;
	var PromedioPositivos;
	var PromedioNegativos;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		Numero = prompt("Ingrese un numero: ");
		Numero = parseInt(Numero)
		if(Numero % 2 == 0)
		{
			contador = contador + 1;
		}
		if(Numero < 0)
		{ 
            SumaNegativos = SumaNegativos + Numero;
            ContadorNegativos = ContadorNegativos + 1; 
		}
		else
		{
			if(Numero > 0)
			{
                SumaPositivos = SumaPositivos + Numero;
                ContadorPositivos = ContadorPositivos + 1
			}
			else
			{
				ContadorCeros = ContadorCeros + 1;
			}
		}	
		respuesta = prompt("Desea continuar ingresando numeros?");
		while(!(respuesta == "no" || respuesta == "si"))
		{
			alert("Esa no es una respuesta valida");
			respuesta = prompt("Ingrese no para salir y si para volver a ingresar un numero");
		}

	}
	PromedioPositivos = SumaPositivos / ContadorPositivos;
	PromedioNegativos = SumaNegativos / ContadorNegativos;
	DiferenciaNegPos = SumaPositivos + SumaNegativos;
	document.write("LA SUMA DE LOS NEGATIVOS ES: " + SumaNegativos + "<BR>");
	document.write("LA SUMA DE LOS POSITIVOS ES: " + SumaPositivos + "<BR>"); 		
	document.write("LA CANTIDAD DE POSITIVOS ES: " + ContadorPositivos + "<BR>");
	document.write("LA CANTIDAD DE NEGATIVOS ES: " + ContadorNegativos + "<BR>");
	document.write("LA CANTIDAD DE CEROS ES: " + ContadorCeros + "<BR>");
	document.write("LA CANTIDAD DE NUMEROS PARES ES: " + contador + "<BR>");
	document.write("EL PROMEDIO DE LOS POSITIVOS ES DE: " + PromedioPositivos + "<BR>");
	document.write("EL PROMEDIO DE LOS NEGATIVOS ES DE: " + PromedioNegativos + "<BR>");
	document.write("LA DIFERENCIA DE NEGATIVOS Y POSITIVOS ES DE: " + DiferenciaNegPos + "<BR>");
	*/
}//FIN DE LA FUNCIÓN