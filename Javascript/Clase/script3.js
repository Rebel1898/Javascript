

//bucle if//
var cachas=false;
var altura=180;
var peso= 5;



 if (peso<=altura-100-20){ //lo condicion mas restrictiva primero//
    console.log("come mas:", altura-100-peso);

}
 else if (peso<=altura-100)
{
console.log("cachas");


}


else{
    console.log("Te sobran:", altura-100-peso);


}




console.log("los meses son:")

var array = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var printmeses = ["1","6","11","12"];

for(i=0;i<printmeses.length;i++)
{

    printmeses[i] = printmeses[i]-1

}


console.log(printmeses);


for (i=0;i<array.length;i++)
{
console.log(array[printmeses[i]]);
}





