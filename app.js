// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function cambiarElemento(elemento, mensaje){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=mensaje;
    return;
}
function agregarAmigos(amigos) {

    cambiarElemento('#listaAmigos', '')
     for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        document.getElementById('listaAmigos').appendChild(li);
    }
}

function limpiarCaja(){
    document.querySelector("#amigo").value='';
}


function agregarAmigo(){
    let amigo=document.querySelector("#amigo").value;

    if(amigo==''){
        alert("Por favor, inserte un nombre");
    }
    else{
        amigos.push(amigo);
        limpiarCaja();
        agregarAmigos(amigos);
        return
    }
}

