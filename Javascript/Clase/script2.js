//Mostrar con arrays Enero, Julio, Noviembre y Diciembre// Usando como unico indice el //

var array = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log("Los elementos del array son:",array);


array.length;
console.log("",array.length);

var enero = array.length-1;
var julio = array.length-1;
var noviembre = array.length-1;
var diciembre = array.length-1;




console.log(array[0],array[6],array[10],array[11]);

resta = array.length-array.length; //Llamando a Enero//
console.log("",array[resta]);

resta = array.length-6; //Llamando a Julio//
console.log("",array[resta]);


resta = array.length-2; //Llamando a Noviembre//

console.log("",array[resta]);





resta = array.length-1; //Llamando a Diciembre//

console.log("",array[resta]);




for (i=0;i<array.length;i++)
{



    
document.write(array[i] + "<br >");
console.log(array[i]);
}



//