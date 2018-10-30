let notas = [

    { nombre: 'do', sonido: './wav/c1.wav', tono: true },
    { nombre: 'dos', sonido: './wav/c1s.wav', tono: false },
    { nombre: 're', sonido: './wav/d1.wav', tono: true },

 ];
 
 
 
 function generateStructure(arrNotes, divN) { //arrNotes notas para generar la estructura y divN donde quiero que se ancle
 
    let finalHtml = '';
 
 
 
    arrNotes.forEach(element => {
 
        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;//? es if y ://
 
    });
 
 
 
    document.getElementById(divN).innerHTML = finalHtml;
 
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
 
 
 
 generateStructure(notas, 'piano');