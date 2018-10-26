//Esto es programacion orientada a objetos//

    //gestionar clase 
    //Persona mid,nombre,edad 
    //Lista de datos de clase [234] Ricardo 41

    clase= ["SLS","Belen","Cristina"]
    edad=["40","35","27"]
    id= [2351,1504,1452];


    
    for (let index = 0; index < id.length; index++) {
   
        console.log ("Hola mi ID es "+ id[index]+" Me llamo " + clase[index] + "; tengo " + edad[index] + " años")    ;
        

}

   //Lo mismo pero mejor usando objetos

  let clase2=[
       {ide:1 , nombre2:'Pepe' , edad2: 34, showInfo: function(){ 
           return "Hola mi ID es "+ this.ide+" Me llamo " + this.nombre2 + "; tengo " + this.edad2 + " años";}}
           ,{ide:1 , nombre2:'ae' , edad2: 32, showInfo: function(){ 
            return "Hola mi ID es "+ this.ide+" Me llamo " + this.nombre2 + "; tengo " + this.edad2 + " años";}},//Entre comas las llaves
  ]
   for (let index = 0; index < clase2.length; index++) {

    console.log (clase2[index].showInfo()) ;

        }



   //Clases--->ES5 mediante funciones. Siempre con mayusculas ; 
   
   let Persona= function(id2,nombre2,edad2){
this.id2=id2;
this.nombre2=nombre2;
this.edad2=edad2;

this.showInfo=function() { return "Hola mi ID es "+ this.id2+" Me llamo " + this.nombre2 + "; tengo " + this.edad2 + " años";}

   }
   
   let ricardo=new Persona();
   ricardo.nombre2="Ricardo";
   ricardo.edad2=23;

   let horseluis=new Persona(1,"Horse Luis",32);



//Repitiendo el primer ejercicio modo optimo

let clase3=[
    new Persona (1,"Horse Luis",32),
    new Persona (1,"Horse Perez",32),
    new Persona (1,"Horse Ramon",32),
];

for (let index = 0; index < clase3.length; index++) {

    console.log (clase3[index].showInfo()) ;

        }
//Lo mismo con ES6

class Persona2{

    constructor(id2,nombre2,edad2)
    {
this.id2=id2;
this.nombre2=nombre2
this.edad2=edad2;

    }
showInfo(){
    return this.id2+" "+this.nombre2 +" "+this.edad2;
}

}


let clase4=[
    new Persona2 (1,"Horse Antonio",32),
    new Persona2 (1,"Horse Maria",32),
    new Persona2 (1,"Horse Manuel",32),
];

for (let index = 0; index < clase4.length; index++) {

    console.log (clase4[index].showInfo()) ;

        }