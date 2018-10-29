


document.getElementById("upper").onclick = function () {
    document.getElementById("parrafo1").innerHTML = document.getElementById("parrafo1").innerHTML.toUpperCase();


}

//Para el segundo boton toLowercase
//Usar boton para cambiar elementos HTML


document.getElementById("lower").onclick = function () {
    document.getElementById("parrafo1").innerHTML = document.getElementById("parrafo1").innerHTML.toLowerCase();


}


document.getElementById("taxo").onclick = function () {
    var parraf = document.getElementById("parrafo1").innerHTML;

    let array = [];

    separat = parraf.split(" ");

    for (let index = 0; index < separat.length; index++) {

        
        array[index] = separat[index].toLowerCase().replace(separat[index].charAt(0).toLowerCase(), separat[index].charAt(0).toUpperCase());
//Por alguna razon, x.replace(x,y) X debe ser exactamente igual.
    }
    var arrayjunto = array.join(" ");
    console.log(arrayjunto);

    document.getElementById("parrafo1").innerHTML = arrayjunto;



}

//for (let index = 0; index < sub.splited.length; index++) {= sub.splited[index]}





////yugo1="";

//document.getElementById("s").onclick=function()

//{ 
  //  document.getElementById("parrafo1").innerHTML=yugo1;
    //console.log(yugo1);

    //}


