function Mostrar()
{
//tomo la edad  

	var Edad;
	var EstadoCivil;
	EstadoCivil = document.getElementById('estadoCivil').value;
	Edad = document.getElementById('edad').value;

	if(Edad < 18 && EstadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero");
	}



}//FIN DE LA FUNCIÓN