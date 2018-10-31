

    $.ajax({
        url: "http://www.mocky.io/v2/5bd888d6310000e139474f0d",
    }).done(function (datanotas) {
        generateStructure(datanotas,'piano1')

    });



//



function generateStructure(datanotas, divN) { //datanotas notas para generar la estructura y divN donde quiero que se ancle

    let finalHtml = '';



    datanotas.forEach(element => {

        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;//? es if y ://

    });



    document.getElementById('piano').innerHTML = finalHtml;

    associateAndPlayNotes();

}



function associateAndPlayNotes() {

    let player = document.getElementById('player');



    document.querySelectorAll('.note').forEach(element => {

        element.onclick = function () {

            player.src = this.getAttribute('data-snd');

            player.play();

        }

    });



}



generateStructure(datanotas, 'piano');