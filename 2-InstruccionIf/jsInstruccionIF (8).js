function Mostrar()
{
//tomo la edad  

	var Edad;
	var EstadoCivil;
	EstadoCivil = document.getElementById('estadoCivil').value;
	Edad = document.getElementById('edad').value;

	if(Edad > 17 && EstadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor de edad");
	}


}//FIN DE LA FUNCIÓN