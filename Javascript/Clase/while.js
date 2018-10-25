var mascotas =[];


for(i=1;i<=1000;i++)
{
    mascotas[i]=("perrito nº "+i);
   // console.log("La mascota  numero:",i,"es " ,mascotas[i]);

}





//perrito 1 no tiene hermanos y perrito i es hermano de perrito i-1//

//perrito 1 no tiene hermanos y perrito i es hermano de perrito i-1, esta vez con while//

r=1;


while(r<=1000){
    if(r==1){
        console.log(mascotas[r]+" no tiene hermanos(while)");
        r++
    }
  else{
  console.log(mascotas[r]+" es hermano de(while) "+ mascotas[r-1]);
  r++
  }


}