function Mostrar()
{
	var NumeroIngresado;
    var NumeroAnterior;
    var NumeroRecorrido;
    NumeroIngresado = prompt("Ingrese un numero");
    NumeroIngresado = parseInt(NumeroIngresado);
    var AcumDiv = 1;


    for(NumeroRecorrido = NumeroIngresado; NumeroRecorrido > 0;NumeroRecorrido--)
    {
    	AcumDiv = 1;
    	for(NumeroAnterior = 2 ; NumeroAnterior < NumeroRecorrido ; NumeroAnterior++)
        {
            if(NumeroRecorrido % NumeroAnterior == 0)
            {
                AcumDiv = AcumDiv + NumeroAnterior;
            }

        }
        if(AcumDiv == 1)
        {
        	AcumDiv = 0;
        }
        if(AcumDiv == NumeroRecorrido)
        {
            console.log("Es perfecto " + NumeroRecorrido);
        }

    }    

/*

    for(NumeroAnterior = 2 ; NumeroAnterior < NumeroIngresado ; NumeroAnterior++)
    {
        if(NumeroIngresado % NumeroAnterior == 0)
        {
            AcumDiv = AcumDiv + NumeroAnterior;
        }
    }

    if(AcumDiv == NumeroIngresado)
    {
        console.log("Es perfecto " + NumeroIngresado);
    }
    



*/
}//FIN DE LA FUNCIÓN