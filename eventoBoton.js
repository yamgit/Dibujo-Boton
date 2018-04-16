function dibujandoLineas(colorLinea,xIni,yIni,xFin,yFin)
{
	dibujo.beginPath();
	dibujo.strokeStyle=colorLinea;
	dibujo.moveTo(xIni,yIni);
	dibujo.lineTo(xFin,yFin);
	dibujo.stroke();
	dibujo.closePath();
}

var lienzo=document.getElementById("maqueta");
var dibujo=lienzo.getContext("2d");

var texto=document.getElementById("campoTexto");



// Total de lineas



var boton=document.getElementById("botoncito");
boton.addEventListener("click",dibujarConBoton);




function dibujarConBoton()
{
	
	var totalLineas=parseInt(texto.value);
	console.log(totalLineas);
	var lineas=0;
	var espacio=lienzo.width/totalLineas;
	var color="#424242";
	var yFinal1,xInicial1,xInicial2,yFinal2,yFinal3,xInicial3,xInicial4,yFinal4;
	



	while(lineas<totalLineas)
		{
			yFinal3=yFinal1=lineas*espacio;
			xInicial2=xInicial1=(lineas+1)*espacio;
			yFinal4=yFinal2=300-(lineas*espacio);
			xInicial4=xInicial3=290-(lineas*espacio);
			dibujandoLineas(color,0,yFinal1,xInicial1,300);
			dibujandoLineas(color,xInicial2,0,0,yFinal2);
			dibujandoLineas(color,300,yFinal3,xInicial3,300);
			dibujandoLineas(color,xInicial4,0,300,yFinal4);
			lineas++;

		}
	dibujandoLineas(color,1,1,1,299);
	dibujandoLineas(color,1,299,299,299);
	dibujandoLineas(color,299,299,299,1);
	dibujandoLineas(color,1,1,299,1);

}
/*
var campotext=document.getElementById("campoTexto");
var boton = document.getElementById("botoncito");
boton.addEventListener("Click",pintando);


function pintando ()
{
	var xInicial1,yInicial,xFinal1,xFinal2,xInicial2,yFinal;
	var totalLineas=parseInt(campotext.value);
	var espacio=300/totalLineas;
	var lineas=0;

	while(lineas<totalLineas)
	{
		xInicial1=yInicial=lineas*espacio;
		xFinal1=(lineas+1)*espacio;
		xInicial2=xFinal2=290-(lineas*espacio);
		yFinal=300-(lineas*espacio);
		dibujandoLineas(color,0,yInicial,xFinal1,300);
		dibujandoLineas(color,300,yInicial,xFinal2,300);
		dibujandoLineas(color,xInicial1,0,0,yFinal);
		dibujandoLineas(color,xInicial2,0,300,yFinal);
		lineas++;

	}
}
*/

/*

*/
/*
var ingresoColor=prompt("Ingrese su color:");
var xInicial=parseInt(prompt("Ingrese X inical:"));
var yInicial=parseInt(prompt("Ingrese Y inical:"));
var xFinal=parseInt(prompt("Ingrese X final:"));
var yFinal=parseInt(prompt("Ingrese Y final:"));

dibujandoLineas(ingresoColor,xInicial,yInicial,xFinal,yFinal);
*/



//dibujando ando
//Generando funcion dibujo de linea

/*
for (var lineas = 0; lineas<30 ; lineas++)
{
	xInicial1=yInicial=lineas*10;
	xFinal1=(lineas+1)*10;
	xInicial2=xFinal2=290-(lineas*10);
	yFinal=300-(lineas*10)
	dibujandoLineas(color,0,yInicial,xFinal1,300);
	dibujandoLineas(color,300,yInicial,xFinal2,300);
	dibujandoLineas(color,xInicial1,0,0,yFinal);
	dibujandoLineas(color,xInicial2,0,300,yFinal);
}
*/
