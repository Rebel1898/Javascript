let saludaboton = document.getElementsByClassName("saludaboton");

console.log(saludaboton);


for (let index = 0; index < saludaboton.length; index++) {
saludaboton[index].onclick=function(){
    let name =this.getAttribute('data-name');
    let idp =this.getAttribute('data-idp');
    let infop= document.getElementById(idp).innerHTML;
    alert("Hola amigacho... Soy "+infop+"!");
}

}

let borraboton=document.getElementsByClassName("borraboton")

console.log(borraboton);

for (let index = 0; index < borraboton.length; index++) {
    borraboton[index].onclick=function(){
        let destroy =this.getAttribute('data-ilp');
       
        removelement(destroy);

    
    }

}



function removelement(id) {
    var list = document.getElementById(id);
    return list.parentNode.removeChild(list);
}