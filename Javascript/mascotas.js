
var mascotas =[];


for(i=1;i<=1000;i++)
{
    mascotas[i]=("perrito nº "+i);
   // console.log("La mascota  numero:",i,"es " ,mascotas[i]);

}





//perrito 1 no tiene hermanos y perrito i es hermano de perrito i-1//

for(j=1;j<=10;j++)
{
  if(j==1){
      console.log(mascotas[j]+" no tiene hermanos");
      
  }
else{
console.log(mascotas[j]+" es hermano de "+ mascotas[j-1]);

}
}


