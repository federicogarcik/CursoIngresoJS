function Mostrar()
  /*al generar numeros random del 0 al 10 se debe contar la cantidad de cada una de estas cifras, repetir
   la iteracion para lanzar el random cien mil veces e informar:*/
{
    var NumeroIngresado;
    var NumeroAnterior;
    var TieneDivisor = "no";
    var NumeroRecorrido
    NumeroIngresado = prompt("Ingrese un numero");
    NumeroIngresado = parseInt(NumeroIngresado);

    for(NumeroRecorrido = NumeroIngresado - 1; NumeroRecorrido > 0  ; NumeroRecorrido--)
    {
        TieneDivisor = "no";
        for(NumeroAnterior = 2 ; NumeroAnterior <= (NumeroRecorrido/2) ; NumeroAnterior++)
        {
            TieneDivisor = "no";
            if(NumeroRecorrido % NumeroAnterior == 0)
            {
                TieneDivisor = "Si";
                break;
            }
        }

        if(TieneDivisor == "no")
        {
            console.log("Es primo" + NumeroRecorrido);
        }
    }
	//1- la cantidad de veces que salio el numero del 0 al 10
    //2- el porcentaje de veces que salio cada numero con respecto al total 
   /* var Numero;
    var ContadorUno = 0;
    var ContadorDos = 0;
    var ContadorTres = 0;
    var ContadorCuatro = 0;
    var ContadorCinco = 0;
    var ContadorSeis = 0;
    var ContadorSiete = 0;
    var ContadorOcho = 0;
    var ContadorNueve = 0;
    var ContadorDiez = 0;
    var ContadorCero = 0;
    var PorcentajeUno;
    var PorcentajeDos;
    var PorcentajeTres;
    var PorcentajeCuatro;
    var PorcentajeCinco;
    var PorcentajeSeis;
    var PorcentajeSiete;
    var PorcentajeOcho;
    var PorcentajeNueve;
    var PorcentajeDiez;
    var PorcentajeCero;

    for(var ContadorFor = 0 ; ContadorFor < 100000 ; ContadorFor++)
    {
    	Numero = Math.floor(Math.random() * 11);
    	console.log(Numero);
    	switch(Numero)
    	{
    		case 0:
    		   ContadorCero++;
    		   break
    		case 1:
    		   ContadorUno++;
    		   break
    		case 2:
    		   ContadorDos++;
    		   break
    		case 3:
    		   ContadorTres++;
    		   break
    		case 4:
    		   ContadorCuatro++;
    		   break
    		case 5:
    		   ContadorCinco++;
    		   break
    		case 6:
    		   ContadorSeis++;
    		   break
    		case 7:
    		   ContadorSiete++;
    		   break
    		case 8:
    		   ContadorOcho++;
    		   break
    		case 9:
    		   ContadorNueve++;
    		   break
    		case 10:
    		   ContadorDiez++;
    		   break    		      
    	}
    }
    PorcentajeUno = (ContadorUno * 100) / 100000;
    PorcentajeDos = (ContadorDos * 100) / 100000;
    PorcentajeTres = (ContadorTres * 100) / 100000;
    PorcentajeCuatro = (ContadorCuatro * 100) / 100000;
    PorcentajeCinco = (ContadorCinco * 100) / 100000;
    PorcentajeSeis = (ContadorSeis * 100) / 100000;
    PorcentajeSiete = (ContadorSiete * 100) / 100000;
    PorcentajeOcho = (ContadorOcho * 100) / 100000;
    PorcentajeNueve = (ContadorNueve * 100) / 100000;
    PorcentajeDiez = (ContadorDiez * 100) / 100000;
    PorcentajeCero = (ContadorCero * 100) / 100000;

    document.write("El numero uno salio un total de " + ContadorUno + " veces y el porcentaje es " + PorcentajeUno + "<BR>");
    document.write("El numero dos salio un total de " + ContadorDos + " veces y el porcentaje es " + PorcentajeDos + "<BR>");
    document.write("El numero tres salio un total de " + ContadorTres + " veces y el porcentaje es " + PorcentajeTres + "<BR>");
    document.write("El numero cuatro salio un total de " + ContadorCuatro + " veces y el porcentaje es " + PorcentajeCuatro + "<BR>");
    document.write("El numero cinco salio un total de " + ContadorCinco + " veces y el porcentaje es " + PorcentajeCinco + "<BR>");
    document.write("El numero seis salio un total de " + ContadorSeis + " veces y el porcentaje es " + PorcentajeSeis + "<BR>");
    document.write("El numero siete salio un total de " + ContadorSiete + " veces y el porcentaje es"+ PorcentajeSiete + "<BR>");
    document.write("El numero ocho salio un total de " + ContadorOcho + " veces y el porcentaje es " + PorcentajeOcho + "<BR>");
    document.write("El numero nueve salio un total de " + ContadorNueve + " veces y el porcentaje es " + PorcentajeNueve + "<BR>");
    document.write("El numero diez salio un total de " + ContadorDiez + " veces y el porcentaje es " + PorcentajeDiez + "<BR>");
    document.write("El numero cero salio un total de " + ContadorCero + " veces y el porcentaje es " + PorcentajeCero + "<BR>");*/
}//FIN DE LA FUNCIÓN