let amigos = [

    { name: 'Jose', email: 'jose.barealpz@gmail.com' },

    { name: 'Paco', email: 'paco.lopez@gmail.com' },

    { name: 'Lara', email: 'lara.garcia@gmail.com' },

    { name: 'Javi', email: 'javi.barreiro@gmail.com' },

    { name: 'Luisa', email: 'luisa.gonzalez@gmail.com' }

];         

window.localStorage.setItem /(    'palabra almacenada', 'valor de la palabra');


let amigosRet=JSON.stringify(amigos);



console.log(window.localStorage.setItem('palabraAlmacenada'));
//console.log(window.localStorage.removeItem('palabraAlmacenada'));
//window.localStorage.removeItem()