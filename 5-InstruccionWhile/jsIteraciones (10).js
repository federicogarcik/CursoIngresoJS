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
    var ContadorHombresAproMayores = 0;
    var ContadorMujeresMenores = 0;
    var NombreMujerMejorNota;
    var NombreHombreMejorNota;
    var MejorNotaMujer = 0;
    var SumaNotaHombres = 0;
    var SumaNotaMujeres = 0;
    var ContadorNotaHombre = 0;
    var ContadorNotaMujer = 0;
    var PromedioNotaHombre;
    var PromedioNotaMujer;
    var ContadorAprobados = 0;
    var ContadorDesaprobados = 0;
    var NombreDiez;
    var SexoDiez;
    var ContadorDiez = 0;

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
        while(Edad > 100 || Edad < 0)
        {
            alert("Esa no es una edad valida");
            Edad = prompt("Por favor ingrese su edad");
        }
        Nombre = prompt("Por favor ingrese su nombre");
        while(Nombre != isNaN(Nombre))
        {
            alert("Ese no es un nombre valido");
            Nombre = prompt("Por favor ingrese su nombre");
        }
        Sexo = prompt("Por favor introdusca su sexo");
        while(!(Sexo == "f" || Sexo == "m"))
        {
            alert("Ese no es un sexo valido");
            Sexo = prompt("Por favor Introdusca su sexo");

        }
        /*Aca termino la carga y validacion de datos  
        Comenzamos a hacer las operaciones necesarias*/

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

      
        switch(Sexo)
        {
            case "f":
                if(Nota > 3)
                {
                    ContadorMujeresApro = ContadorMujeresApro + 1
                }     
                if(Edad < 20)
                {
                    ContadorMujeresMenores = ContadorMujeresMenores + 1;
                }  
                if(Contador == 0 )
                {
                    MejorNotaMujer = Nota;
                    NombreMujerMejorNota = Nombre;
                }
                else
                {
                    if(Nota > MejorNotaMujer)
                    {
                        MejorNotaMujer = Nota;
                        NombreMujerMejorNota = Nombre;
                    }
                }
                SumaNotaMujeres = SumaNotaMujeres + Nota;
                ContadorNotaMujer = ContadorNotaMujer + 1;
                break

            case "m":
                if(Nota > 3 && Edad > 25)
                {
                    ContadorHombresAproMayores = ContadorHombresAproMayores + 1;
                }
                if(Contador == 0)
                {
                    MejorNotaHombre = Nota;
                    NombreHombreMejorNota = Nombre;
                }
                else
                {
                    if(Nota > MejorNotaHombre)
                    {
                        MejorNotaHombre = Nota;
                        NombreHombreMejorNota = Nombre;
                    }
                }   
                SumaNotaHombres = SumaNotaHombres + Nota;
                ContadorNotaHombre = ContadorNotaHombre + 1;
                break
        }        
        if(Nota > 3)
        {
            ContadorAprobados = ContadorAprobados + 1;
        }
        else
        {
            ContadorDesaprobados = ContadorDesaprobados + 1;
        }
        if(ContadorDiez == 0 && Nota == 10)
        {
            NombreDiez = Nombre;
            SexoDiez = Sexo;
            ContadorDiez = ContadorDiez + 1;
        }
        


        Contador++;
        Respuesta = prompt("Ingrese la letra s para continuar");
    }
    PromedioNota = SumaNota / Contador;
    PromedioNotaHombre = SumaNotaHombres / ContadorNotaHombre;
    PromedioNotaMujer = SumaNotaMujeres / ContadorNotaMujer;
    PorcentajeAprobados = ContadorAprobados * 100 / Contador;
    PorcentajeDesaprobados = ContadorDesaprobados * 100 / Contador;
    console.log(PromedioNota);
    document.write("La cantidad de mujeres aprobadas es: " + ContadorMujeresApro + "<BR>");
    document.write("La cantidad de hombres mayores a 25 abrobados es: " + ContadorHombresAproMayores + "<BR>");
    document.write("La cantidad de mujeres menores a 20 es: " + ContadorMujeresMenores + "<BR>");
    document.write("La mujer con mejor nota es: " + NombreMujerMejorNota + "<BR>");
    document.write("El hombre con mejor nota es: " + NombreHombreMejorNota + "<BR>");
    document.write("El procentaje de aprobados es de: " + PorcentajeAprobados + "% " + "<BR>");
    document.write("El porcentaje de desaprobados es de: " + PorcentajeDesaprobados + "%" + "<BR>");


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