console.log(window.localStorage.getItem('PalabaAlmacenada'));

let amigosRetStr= window.localStorage.getItem('listamigos');
let amigosRet= JSON.parse(amigosRetStr);


document.getElementById('amigos').innerHTML=function(){

let innerHTML='';

amigosRet.forEach( element =>{


    html+=` <li>$(element.name)!|$(element.email)</li>`;


} );
        return html;

}