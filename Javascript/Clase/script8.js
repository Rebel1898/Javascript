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

   //Lo mismo pero mejor

  let clase2=[
       {ide:1 , nombre2:'Pepe' , edad2: 34, showInfo: function(){ 
           return "Hola mi ID es "+ this.ide+" Me llamo " + this.nombre2 + "; tengo " + this.edad2 + " años";}}
           ,{ide:1 , nombre2:'ae' , edad2: 32, showInfo: function(){ 
            return "Hola mi ID es "+ this.ide+" Me llamo " + this.nombre2 + "; tengo " + this.edad2 + " años";}},
  ]
   for (let index = 0; index < clase2.length; index++) {

    console.log (clase2[index].showInfo()) ;

        }



   

    
