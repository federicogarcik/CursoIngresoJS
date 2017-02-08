function Mostrar()
{
//tomo la edad  
    var Edad;

    Edad = document.getElementById('edad').value;

    if(Edad > 17)
    {
    	alert("Usted es un adulto");
    }
    else
    {
    	if (Edad < 13)
    	{
    		alert("Usted es un niño")
    	}
    	else
    	{
    		alert("Usted es un adolecente")
    	}
    }
/*
se puede hacer con 3 if's probrar
*/


}//FIN DE LA FUNCIÓN