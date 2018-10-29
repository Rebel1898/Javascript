
 
 function parseaamigos(liamigos) {
     console.log(amigos);
 
    let listaul = document.getElementById('liston');
 
    for (let index = 0; index < liamigos.length; index++) {
 
        listaul.innerHTML += `<li>
 
        <div>${liamigos[index].name}</div>
 
        <div>${liamigos[index].email}</div>
 
        <div><button class='saluda' data-value="${liamigos[index].name+': '+liamigos[index].email}">Saludar</button></div>
 
       </li >`;    }
    }
