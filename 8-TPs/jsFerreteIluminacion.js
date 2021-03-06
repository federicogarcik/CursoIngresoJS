/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


function CalcularPrecio () 
{
	var PrecioDescuento;
	var CantidadLamparas;
	CantidadLamparas = document.getElementById('Cantidad').value;
	var Precio = CantidadLamparas * 35;
	Precio = parseInt(Precio);
    var Marca; 
 	Marca = document.getElementById('Marca').value;

 	if(CantidadLamparas > 5)
 	{
 		PrecioDescuento = Precio - (Precio * 0.50);
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}
 	else
 	{
 		if(CantidadLamparas == 5)
 	    {
 		    switch(Marca)
 		    {
 			    case "ArgentinaLuz":
 			        PrecioDescuento = Precio - (Precio * 0.40);
 		            document.getElementById('precioDescuento').value = PrecioDescuento;
 		            break
 		        default:
 		            PrecioDescuento = Precio - (Precio * 0.30)
 		            document.getElementById('precioDescuento').value = PrecioDescuento;
 		    }        	           
 		}
 		else
 		{
 			if(CantidadLamparas == 4)
 			{
 				switch(Marca)
 				{
 					case "ArgentinaLuz":
 					    PrecioDescuento = Precio - (Precio * 0.25);
 		                document.getElementById('precioDescuento').value = PrecioDescuento;
 		                break
 		            case "FelipeLamparas":
 		                PrecioDescuento = Precio - (Precio * 0.25);
 		                document.getElementById('precioDescuento').value = PrecioDescuento;
 		                break
 		            default:
 		                PrecioDescuento = Precio - (Precio * 0.20);
 		                document.getElementById('precioDescuento').value = PrecioDescuento;      
 				}
 			}	
 			else
 			{
 				if(CantidadLamparas == 3)
 				{
 					switch(Marca)
 					{
 						case "ArgentinaLuz":
 						    PrecioDescuento = Precio - (Precio * 0.15);
 	                     	document.getElementById('precioDescuento').value = PrecioDescuento;
 	                     	break
 	                    case "FelipeLamparas":
 	                        PrecioDescuento = Precio - (Precio * 0.10);
 		                    document.getElementById('precioDescuento').value = PrecioDescuento;
 		                    break
 		                default:
 		                    PrecioDescuento = Precio - (Precio * 0.05);
 		                    document.getElementById('precioDescuento').value = PrecioDescuento;                            
 					}
 				} 			     			
 			}	
 			
 		}
 	}
 	if(PrecioDescuento > 120)
 	{
 		var Impuesto = (PrecioDescuento * 0.10);
 		PrecioDescuento = PrecioDescuento + Impuesto;
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 		alert("IIBB Usted pago " + PrecioDescuento + " siendo " + Impuesto + " el impuesto que se pago");
 	}
} 	

 	
 










 /* Forma de hacerlo con if's
 	if (CantidadLamparas > 5)
 	{
 		PrecioDescuento = Precio - (Precio * 0.50);
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}
 	
 	if(CantidadLamparas == 5 && Marca == "ArgentinaLuz")
 	{
 		PrecioDescuento = Precio - (Precio * 0.40);
 		document.getElementById('precioDescuento').value = PrecioDescuento
 	}
 		
 	if(CantidadLamparas == 5 && Marca != "ArgentinaLuz")
 	{
 		PrecioDescuento = Precio - (Precio * 0.30)
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}	     
 	
 	if(CantidadLamparas == 4 && Marca == "ArgentinaLuz" || MarcaUno == "“FelipeLamparas”")
 	{
 		PrecioDescuento = Precio - (Precio * 0.25);
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}
 	
 	if(CantidadLamparas == 4 && Marca != "ArgentinaLuz" && Marca != "“FelipeLamparas”")
 	{
 		PrecioDescuento = Precio - (Precio * 0.20);
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}	
 	
 	if(CantidadLamparas == 3 && Marca == "ArgentinaLuz")
 	{
 		PrecioDescuento = Precio - (Precio * 0.15);
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}
 	
 	if(CantidadLamparas == 3 && Marca == "“FelipeLamparas”")
 	{
 		PrecioDescuento = Precio - (Precio * 0.10);
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}
 	
 	if(CantidadLamparas == 3 && Marca != "ArgentinaLuz" && Marca != "“FelipeLamparas”")
 	{
 		PrecioDescuento = Precio - (Precio * 0.5);
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 	}
 		
 	if(PrecioDescuento > 120)
 	{
 		var Impuesto = (PrecioDescuento * 0.10);
 		PrecioDescuento = PrecioDescuento + Impuesto;
 		document.getElementById('precioDescuento').value = PrecioDescuento;
 		alert("IIBB Usted pago " + PrecioDescuento + " siendo " + Impuesto + " el impuesto que se pago");
 	}
*/ 
 


