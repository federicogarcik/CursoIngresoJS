function Mostrar()
  /*al generar numeros random del 0 al 10 se debe contar la cantidad de cada una de estas cifras, repetir
   la iteracion para lanzar el random cien mil veces e informar:*/
{

	//1- la cantidad de veces que salio el numero del 0 al 10
    //2- el porcentaje de veces que salio cada numero con respecto al total 
    var Numero;
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
    		case 6;
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
        document.write("El numero uno salio un total de " + CantidadUno + " veces y el porcentaje es " + PorcentajeUno + "<BR>");
    	document.write("El numero dos salio un total de " + CantidadDos + " veces y el porcentaje es " + PorcentajeDos + "<BR>");
    	document.write("El numero tres salio un total de " + CantidadTres + " veces y el porcentaje es " + PorcentajeTres + "<BR>");
    	document.write("El numero cuatro salio un total de " + CantidadCuatro + " veces y el porcentaje es " + PorcentajeCuatro + "<BR>");
    	document.write("El numero cinco salio un total de " + CantidadCinco + " veces y el porcentaje es " + PorcentajeCinco + "<BR>");
    	document.write("El numero seis salio un total de " + CantidadSeis + " veces y el porcentaje es " + PorcentajeSeis + "<BR>");
    	document.write("El numero siete salio un total de " + CantidadSiete + " veces y el porcentaje es"+ PorcentajeSiete + "<BR>");
    	document.write("El numero ocho salio un total de " + CantidadOcho + " veces y el porcentaje es " + PorcentajeOcho + "<BR>");
        document.write("El numero nueve salio un total de " + CantidadNueve + " veces y el porcentaje es " + PorcentajeNueve + "<BR>");
    	document.write("El numero diez salio un total de " + CantidadDiez + " veces y el porcentaje es " + PorcentajeDiez + "<BR>");
    	document.write("El numero cero salio un total de " + CantidadCero + " veces y el porcentaje es " + PorcentajeCero + "<BR>");
    	//FALTA DEFINIR VARIABLES , HACER CALCULOS Y TESTEAR
}//FIN DE LA FUNCIÓN