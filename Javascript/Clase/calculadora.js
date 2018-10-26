
array=[5,1,1]


function adicion(array)
{
    suma=0;

    for (let index = 0; index < (array.length); index++) {
        suma=suma+array[index];
      

    }
    return (suma)

}

function sustracion(array)
{
    resta=array[0];

    for (let index = 0; index < (array.length); index++) {
        resta=resta-array[index];
      

    }
    return (resta)

}

function multiplicacion(array)
{
    producto=1;

    for (let index = 0; index < (array.length); index++) {
        producto=producto*array[index];
      

    }
    return (producto);

}

function division(array)
{


    for (let ipi = 1; ipi < array.length; ipi++) {
        if(array[ipi]==0){
         return " You cant divide by 0. It can destroy our universe"
        } 
        else{
           
        }

    }
    cociente=array[0];
    for (let index = 0; index < (array.length); index++) {
        cociente=cociente/array[index];    
}

   
    return (cociente);


    
}



//console.log(sustracion(array));
//console.log(division(array));
//console.log(operador(array,'+'));
//console.log(operador(array,'-'));
//console.log(operador(array,'*'));
console.log(operador(array,'/'));


function operador (array,operacion)
{


if(operacion== '+')
{
adicion(array); 
return "La suma de todos los valores es "+ suma;
}
if(operacion== '-')
{
sustracion(array);
return "La resta de todos los valores es "+ resta;
}
if(operacion== '*')
{
multiplicacion(array);
return "La multiplicación de todos los valores es "+ producto;
}


if(operacion== '/')
{
division(array);
    return " La division de todos los valores es "+ cociente;
}


else{
    return("Parámetros erróneos. Introduce sólo numeros  y los operadores +, -, *, / y %");
}

}