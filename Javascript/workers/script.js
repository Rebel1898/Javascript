let w = new Worker('./worker.js');
//w.postMessage("Hola");

let array=[1,50,2,1,1];

w.postMessage (array);



w.onmessage=function (mess) {
    console.log(mess.data);
}

