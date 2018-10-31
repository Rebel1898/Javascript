onmessage = function(mess){
   // let text =mess.data;
    let sumando = mess.data;
    suma=0;
for (let index = 0; index < sumando.length; index++) {
    
    suma=suma+sumando[index];
    
}

console.log(suma);


this.console.log(suma)//console en script
this.postMessage("La suma de los elementos es igual a "+suma);

}