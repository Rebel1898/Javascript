

function generarHTML(paramigos,numero){
    $('#amigos'+numero).html(function () {
   let htmlamigos = '';
   paramigos.forEach(unamigo => {
       htmlamigos += `<li>${unamigo.name}
             <div><button class='saluda${""+numero}' data-value="${'hola ' + unamigo.name}">Saludar</button></div></li>`;
   })
   return htmlamigos;
});}

$('#cargarbtn').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b343100002714474d53",
    }).done(function (data) {
        numero=1;
       generarHTML(data,numero);
       asociaciaclick(numero);

    });
});


$('#spoty').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd87511310000f735474e8e",
    }).done(function (data) {
        numero=2;
       generarHTML(data,numero);
       asociaciaclick(numero);
    });

});



function asociaciaclick(numero){
    $('.saluda'+""+numero).click(function() {
        alert($(this).attr('data-value') + '!!');

    }
    );


}