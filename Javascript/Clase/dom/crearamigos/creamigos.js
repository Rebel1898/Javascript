let amigos = [

    { name: 'Jose', email: 'jose.barealpz@gmail.com' },

    { name: 'Paco', email: 'paco.lopez@gmail.com' },

    { name: 'Lara', email: 'lara.garcia@gmail.com' },

    { name: 'Javi', email: 'javi.barreiro@gmail.com' },

    { name: 'Luisa', email: 'luisa.gonzalez@gmail.com' }

];
//for (let index = 0; index < amigos.length; index++) {
//  listaUL.innerHTML += "<li>"+amigos[index].name+" "+"<br><br></li>}
//insertado a pelo o dentro de //vamos a insertarlo dentro de un li element//

//En ES6 listaUL.innerHTML += <li> <spa>${amigos[index].name}</span> la plantilla aqui es mas parecida a HTML
//


function parseaamigos(liamigos) {

    let listaul = document.getElementById('liston');

    for (let index = 0; index < liamigos.length; index++) {

        listaul.innerHTML += `<li>
    
           <div>${liamigos[index].name}</div>
    
           <div>${liamigos[index].email}</div>
    
           <div><button id='saluda' data-value="${liamigos[index].name}">Saludar</button></div>
    
          </li >`;
    }


    //Procesar   
     parseamigos(liamigos);


    let saludabotones = document.getElementsById('saluda');

    for (let index = 0; index < saludabotones.length; index++) {

        saludabotones[index].onclick = function () {

            alert(this.getAttribute('data-value'));

        }}
    }


