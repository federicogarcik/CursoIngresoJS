function Mostrar()
{

    var Nota;
	var contador=0;
	var acumulador=0;

	while(contador < 5)
	{
        Nota = prompt("Ingrese su nota: ")
		while(!(Nota == parseInt()  || Nota > 0))
		{
			alert("Ingrese una nota valida");
			Nota = prompt ("Ingrese su nota: ");
		}
		Nota = parseInt(Nota);
		acumulador = parseInt(acumulador);
		acumulador = acumulador + Nota;
		contador = contador + 1
	}
	//Promedios y mostrar datos afueras del while

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN