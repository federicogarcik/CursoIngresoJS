function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

if(mesDelAño == "Agosto" || mesDelAño == "Julio")
{
	alert("Abrigate que hace frio");
}
else
{
	if(mesDelAño != "Julio" || mesDelAño != "Agosto")
    {
	    switch(mesDelAño)
	    {
		    case "Enero":
			    alert("Falta para el invierno");
			    break	    
		    case "Febrero":
			    alert("Falta para el invierno");
			    break
		    case "Marzo":
			    alert("Falta para el invierno");
			    break
		    case "Abril":
			    alert("Falta para el invierno");
			    break
		    case "Mayo":
			    alert("Falta para el invierno");
			    break
		    case "Junio":
			    alert("Falta para el invierno");      
			default:
			alert("ya pasamos el frio , ahora el calor")
		}	    		             
	}	
}
}//FIN DE LA FUNCIÓN*/