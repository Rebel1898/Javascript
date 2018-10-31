//$.ajax({
//  url: "http://www.mocky.io/v2/5bd84cdc3100002414474d67",
//context: document.body
//}).done(function(amigosserver) {
// $("#cargarbtn").click(function(){
//   console.log(amigosserver); });
//});

//Solucion mejor

$("#cargarbtn").click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd8673c310000950e474e32",
        context: document.body
    }).done(function (amigosserver){
        $('#amigos').html(function () {
            let htmlamigos = '';
            amigosserver.forEach(unamigo => {
                htmlamigos += `<li>${unamigo.firstname}
                      <div><button class='saluda' data-value="${'hola ' + unamigo.firstname}">Saludar</button></div></li>`;
            })
            return htmlamigos;
        });
    
     
    })})
  