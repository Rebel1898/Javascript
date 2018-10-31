document.getElementById("boton").onclick = (function (event) {

    let formValid = document.getElementById('loginform').checkValidity();
    console.log(formValid);
    if (formValid) {

        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd973672f0000520006d12f",
            data: {username: document.getElementById("username").value, password: document.getElementById("llave").value}
        })//username: document.getElementbyID("username").value, password: document.getElementbyID("llave").value
            .done(function (data) {
console.log(data);    
if(data.results){
    window.location.href ='dashboard.html'
}      
else{

    document.getElementById('mensaje').classList.remove('esconder');
}

});


    }

    else {
        event.preventDefault();
        //document.getElementById("mensaje").innerHTML= "ERROR";//Red//

        document.querySelectorAll('.error').forEach(elem => {

            elem.classList.add("esconder");

        });

        if (!document.getElementById("username").checkValidity()) {
            document.getElementById("usererror").innerHTML = "ERROR en USUARIO"
        }

        if (!document.getElementById("llave").checkValidity()) {
            document.getElementById("usererror2").innerHTML = "ERROR en PASS"
        }






    }

});





