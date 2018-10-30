console.log($('#holabtn').html());

//$('#holabtn').click(function(){


//alert("Hola");
    //El objeto dolar es idempotente//
//});

$('h1').html('Hola').click(function(){
    alert("Este es el tituylo");
}).html("Otro titulo");

let amigos = [

    { name: 'Jose',img: "img/pic0.jpg",email: 'jose.barealpz@gmail.com' },

    { name: 'Paco',img: "img/pic1.jpg",email: 'paco.lopez@gmail.com' },

    { name: 'Lara',img:"img/pic2.jpg" ,email: 'lara.garcia@gmail.com' },

    { name: 'Javi',img:"img/pic3.jpg" ,email: 'javi.barreiro@gmail.com' },

    { name: 'Luisa',img:"img/pic4.jpg", email: 'luisa.gonzalez@gmail.com' }

];

//$("#amigos").html("Estos son mis amigos");

//$("#amigos").html(function() {
  //  return "Resultado de la función"
//});

$("#amigos").html(function() {
  

let htmlamigos="";
amigos.forEach(unAmigo => {

    htmlamigos +=  `<li><img src="${unAmigo.img}"> ${unAmigo.name} El mail es ${unAmigo.email} <button class="saluda" data-value="${unAmigo.name}">hi!</button>  </li>`;
} );
    return htmlamigos;
    
});
//Otra forma de hacerlo es $('#amigos´).children [...]



$(".saluda").click(function(){
   alert("Hola "+$(this).attr('data-value')+" ");//El truco esta en añadir data values en los button creados a los que hacer referencia luego//
});



$('#holabtn').click(function(){


    $('#amigos').toggle();
        //El objeto dolar es idempotente//
    });