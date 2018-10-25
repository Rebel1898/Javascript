//Codigo para mostrar meses en funcion de un array, con que meses quiere el usuario//


var array = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var printmeses = ["1","6","11","12"];

for(i=0;i<printmeses.length;i++)
{

    printmeses[i] = printmeses[i]-1

}


console.log(printmeses);


for (i=0;i<array.length;i++)
{
if(array[printmeses[i]]==null)
{

}
else{
    console.log(array[printmeses[i]]);

}
}





