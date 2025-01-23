// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function cambiarElemento(elemento, mensaje){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=mensaje;
    return;
}
function agregarAmigosVisible(amigos) {

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
function limpiarlista(){
    amigos=[];
    limpiarCaja();
    agregarAmigosVisible(amigo);
    cambiarElemento("#resultado","")
}

function colorearBoton(){
    let botonAgregar=document.getElementById("agregar")
    let textBoxAmigo=document.querySelector('#amigo')
    if(textBoxAmigo.value!=''){
        botonAgregar.style.backgroundColor= "#fe652b"
        botonAgregar.style.color= "#FFFFFF"
        botonAgregar.addEventListener('mouseenter', function() {
            botonAgregar.style.backgroundColor = "#e55720"; 
        });

        botonAgregar.addEventListener('mouseleave', function() {
            botonAgregar.style.backgroundColor = "#fe652b"; 
        });

    } else {
        botonAgregar.style.backgroundColor = ""
        botonAgregar.style.color= ""
        botonAgregar.addEventListener('mouseenter', function() {
            botonAgregar.style.backgroundColor = "";
        });

        botonAgregar.addEventListener('mouseleave', function() {
            botonAgregar.style.backgroundColor = "";
        });

    }
    textBoxAmigo.addEventListener("input", colorearBoton);

    
}

function agregarAmigo(){
    let amigo=document.querySelector("#amigo").value;
    if(amigos.includes(amigo)){
        alert("Nombre registrado en la lista")
        return;
    }else{
        if(amigo==''){
            alert("Por favor, inserte un nombre");
        }
        else{
            amigos.push(amigo);
            limpiarCaja();
            colorearBoton();
            agregarAmigosVisible(amigos);
            return
    }
    }
    
}

function sortearAmigo(){
    if(amigos!=0){
        let numerorAleatorio=Math.floor(Math.random()*amigos.length);
        let amigoSecreto=amigos[numerorAleatorio];
        cambiarElemento("#listaAmigos", ' ');
        cambiarElemento("#resultado", `Tu amigo secreto es: ${amigoSecreto}`);
    }
    else{
        alert("No hay elementos para sortear");
        return
    }

}

colorearBoton();
