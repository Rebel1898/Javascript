
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

document.getElementById('accederbtn').onclick = (function (evnt) {
    // console.log(evnt);
    evnt.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });

    let formValid = document.getElementById('loginForm').checkValidity();

    if (formValid) {
        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",//caso true
            //url: "http://www.mocky.io/v2/5bd9777d2f0000790006d14c",//caso false
            data: {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
        }).done(function (data) {
            
            if (data.result) {
                //window.location.href = //  'dashboard.html';
               
               
                let newuser = {name: document.getElementById('username').value, email:document.getElementById('password').value, }; 
                
      })
      return htmlamigos;      
                
            } else {
                //mensaje de error
                document.getElementById('mensaje').classList.remove('esconder');
            }
        });

    } else {
        //mostrar mensaje y no enviar
        // document.getElementById('mensaje').innerHTML="Datos incorrectos";       

        if (!document.getElementById('username').checkValidity()) {
            document.getElementById('errorusername').classList.remove('esconder');
        }

        if (!document.getElementById('password').checkValidity()) {
            document.getElementById('errorpass').classList.remove('esconder');
        }
    }
});