a/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var GradosFahr;
	GradosFahr = document.getElementById('Temperatura').value;

	GradosFahr = parseInt(GradosFahr);
	var GradosCenti = (GradosFahr - 32) / 1.8;
	alert(GradosFahr + " fahrenheit son " + GradosCenti + " grados centigrados");
}

function CentigradosFahrenheit () 
{
	var GradosCenti;
	GradosCenti = document.getElementById('Temperatura').value;

	GradosCenti = parseInt(GradosCenti);
	var GradosFahr = (GradosCenti * 1.8) + 32;
	alert(GradosCenti + " centigrados son " + GradosFahr + " grados fahrenheit");
}
