let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //objeto 
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Haz acertado el número secreto en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //quitar el disabled del boton
    } else {
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', "El número el mayor");
        } else {
            asignarTextoElemento('p', "El número es menor")
        }
        intentos++;
        limpiarNumeroUsuario();
        }
    return;
}

function limpiarNumeroUsuario() {
    let valor = document.querySelector('#valorUsuario');
    valor.value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya probamos con todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya no quedan mas números para jugar :c")
    } else {  
        //Si el nuemro esta en la lsita hacemos los siguiente:
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionInicial() {
    asignarTextoElemento('h1','Bienvenido al juego');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Generar el nuevo número
    numeroSecreto = generarNumeroSecreto();
    //Reiniciar contador de intentos
    intentos = 1;
}


function intentarNuevamente() {
    //limpiar el número del usuario
    limpiarNumeroUsuario();
    //Indicar mensaje de intervalos de números
    condicionInicial();
    //Desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionInicial();
