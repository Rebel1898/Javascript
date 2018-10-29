let notas = [
    { name: 'Do', sonido: "./wav/a1.wav", tono: "true" },
    { name: 'Re', sonido: "./wav/b1.wav", tono: "true" },
    { name: 'Mi', sonido: "./wav/c1.wav", tono: "true" },
    { name: 'Fa', sonido: "./wav/d1.wav", tono: "true" },
    { name: 'Sol', sonido: "./wav/e1.wav", tono: "true" },
    { name: 'La', sonido: "./wav/f1.wav", tono: "true" },
    { name: 'Si', sonido: "./wav/g1.wav", tono: "true" },


];

let notasblack = [

    { name: 'Dos', sonido: "./wav/a1s.wav", tono: "false" },
    { name: 'Res', sonido: "./wav/b1.wav", tono: "false" },
    { name: 'Mis', sonido: "./wav/c1.wav", tono: "false" },
    { name: 'Fa', sonido: "./wav/d1.wav", tono: "false" },
    { name: 'Sol', sonido: "./wav/f1.wav", tono: "false" },

]


let notasblancas = document.getElementsByClassName('notablanca');
for (let index = 0; index < notasblancas.length; index++) {
    notasblancas[index].onclick = function () {

        let namer = notas[index].name;
        let sonido = notas[index].sonido;
        let tono = notas[index].tono;


        alert(namer + " " + tono + " ");

        music.innerHTML += `<audio preload autoplay id= "music"><source src=${sonido} type="audio/mpeg"></audio> `;
       
 ;

    }

}



let notasnegras = document.getElementsByClassName('notanegra');
for (let index = 0; index < notasnegras.length; index++) {
    notasnegras[index].onclick = function () {

        let namernegro = notasblack[index].name;
        let sonidonegro = notasblack[index].sonido;
        let tononegro = notasblack[index].tono;

        alert("Hola soy " + namernegro + " " + tononegro + " ");
        music.innerHTML += `<audio preload autoplay id= "music"><source src=${sonidonegro} type="audio/mpeg"></audio> `;

    }

}






