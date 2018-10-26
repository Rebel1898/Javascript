
u1_name = "Rick"
u1_surname = "Ahumada"


u2_name = "Marta"
u2_surname = "Sanchez"


u3_name = "Rick"
u3_surname = "Peridon"

console.log(u1_name," ",u1_surname);
console.log(u2_name," ",u2_surname);


//funcion//       

function generarNombreCompleto(unNombre,unApellido){
    return unNombre+" "+unApellido;//debajo de return, no se ejecuta nada//
    
}

console.log(generarNombreCompleto(u1_name,u1_surname));
console.log(generarNombreCompleto(u1_name,u1_surname));


function operador (valor1,valor2,operacion)
{
if(operacion== '+')
{
return valor1+"+"+valor2+"="+(valor1+valor2);
}
if(operacion== '-')
{
return valor1+"-"+valor2+"="+(valor1-valor2);
}
if(operacion== '*')
{
return valor1+"*"+valor2+"="+(valor1*valor2);
}


if(operacion== '/')
{
    if((valor2 == 0)&&(valor1 > 0))
 
    {return "You cant divide by 0. It can destroy our universe.Although the limit is +infinite ";}
    if((valor2 == 0)&&(valor1 < 0))
 
    {return "You cant divide by 0. It can destroy our universe.Although the limit is -infinite ";}

    if((valor1 == 0)&&(valor2 == 0))

    {return "You are really crazy. This can really destroy our universe!.The limit is not even known to mankind ";}


    else{
        return valor1+"/"+valor2+"="+(valor1/valor2);}
}


if(operacion== '%')
{
return "El resto de "+valor1+"/"+valor2+" es "+(valor1/valor2);
}


else{
    return("Parámetros erróneos. Introduce sólo numeros  y los operadores +, -, *, / y %");
}
}



suma=0;
 

function calculador(array)
{
    for (let index = 0; index < (array.length); index++) {
        suma=suma+array[index];
      

    }
    return (suma)

}
array=[2,0,5,2,2,2,2]
console.log(array.length);
console.log(calculador(array));