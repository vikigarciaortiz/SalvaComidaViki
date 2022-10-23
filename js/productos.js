function delivery() {
    let divPrecioEnvio = document.getElementById("DivPrecioEnvio");
    let divDistancia = document.getElementById("DivDistancia");

    divPrecioEnvio.style.display = "block";
    divDistancia.style.display = "none";

    let h4Horario = document.getElementById("H4Horario");
    let spanHorario = document.getElementById("SpanHorario");

    h4Horario.innerHTML = "Te llega en";
    spanHorario.innerHTML = "<img src='../iconos/reloj.png' height='15'/> 20 min.";
}

function retiro() {
    let divPrecioEnvio = document.getElementById("DivPrecioEnvio");
    let divDistancia = document.getElementById("DivDistancia");

    divPrecioEnvio.style.display = "none";
    divDistancia.style.display = "block";

    let h4Horario = document.getElementById("H4Horario");
    let spanHorario = document.getElementById("SpanHorario");

    h4Horario.innerHTML = "Retira en";
    spanHorario.innerHTML = "<img src='../iconos/reloj.png' height='15'/> 10 min.";
}




// FUNCION PARA INCREMENTAR CONTADORES AL AGREGAR UN PRODUCTO AL CARRITO.
function incrementar(idContador, idMensaje) {

    let contadorHTML = document.getElementById(idContador);
    let mensaje = document.getElementById(idMensaje);

    mensaje.style.display = "block";
    let contador = parseInt(contadorHTML.textContent);
    contador++;
    contadorHTML.innerHTML = contador;
}