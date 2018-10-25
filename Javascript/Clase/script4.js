
//Quiero un programa que me muestre el numero mas grande de un conjunto//

var conjunto = [127, 2, 15, 42];

var num1 = 127;
var num2 = 2;
var num3 = 15;


if ((num1 >= num2) && (num1 >= num2) && (num1 >= num3)) {

    console.log("Este es el numero mas grande:", conjunto[0])

}
else if ((num2 >= num1) && (num2 >= num3)) {
    console.log("Este es el numero mas grande:", conjunto[1])

}

else {
    console.log("Este es el numero mas grande:", conjunto[2])

}

//ordenar//

//Se puede hacer la comparacion de golpe;//&&(conjunto[0]>conjunto[1])&&(conjunto[0]>conjunto[2]))

console.log("Seguimos");

if (conjunto[0] >= conjunto[1]) {

    console.log(conjunto[0]);


}


