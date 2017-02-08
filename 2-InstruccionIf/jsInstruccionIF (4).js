function Mostrar()
{
//tomo la edad  

     var Edad

     Edad = document.getElementById('edad').value;
     
     if(Edad < 18 && Edad > 12)
     {
     	alert("Usted es un adolecente");
     }

/*
     if(Edad >= 13)
     {
     	if(Edad <= 17)
     	{
     		alert("Usted es un adolecente");
     	}
     }
    //si edad esta entre 13 y 17 mostrar mensaje
*/
}//FIN DE LA FUNCIÓN