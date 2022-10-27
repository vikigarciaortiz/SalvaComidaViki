/*
alert ('Bienvenidx a Salva Comida! Para registrarte ingresá los siguientes datos')

let Email = prompt ('Ingresa tu correo electrónico.')

let Contrasena
do {
    Contrasena = prompt ('Ingresa una contraseña. Debe contener más de 8 caracteres.')
    if (Contrasena.length < 8){
        alert ('Error: La contraseña debe tener más de 8 caracteres.')
    }
}while (Contrasena.length < 8)

let Celular = prompt ('Ingresa tu número de celular.')

if (confirm('¿Te querés registrar como consumidor?')){
    let NombreCompleto = prompt ('Ingresa tu nombre y apellido.')
    alert ('Se registró el consumidor ' + NombreCompleto)    
}else{
    let NombreNegocio = prompt ('Ingresa el nombre de tu negocio.')
    let NombreCiudad = prompt ('¿En qué ciudad se encuentra?')
    let Direccion = prompt ('Ingresa la dirección del negocio.')
    alert ('Se registró el negocio ' + NombreNegocio)
}*/

function registrarConsumidor() {
    let nombre = document.getElementById("ConsuNombreCompleto").value;
    let correo = document.getElementById("ConsuCorreo").value;
    let clave = document.getElementById("ConsuClave").value;
    let celular = document.getElementById("ConsuCelular").value;

    if (screen.width < 900) {
        alert("Gracias por registrarte " + nombre + "!");
    } else {
        let mensaje = document.getElementById("MensajeRegistro");
        let texto = document.getElementById("MensajeFinal");
        texto.innerHTML = "Gracias por registrarte " + nombre + "!";
        mensaje.style.display = "grid";
    }
}

function registrarNegocio() {
    let nombre = document.getElementById("NegNombre").value;
    let local = document.getElementById("NegLocal").value;
    let ciudad = document.getElementById("NegCiudad").value;
    let direccion = document.getElementById("NegDireccion").value;
    let correo = document.getElementById("NegCorreo").value;
    let clave = document.getElementById("NegClave").value;
    let celular = document.getElementById("NegCelular").value;

    if (screen.width < 900) {
        alert("Gracias por registrarte " + nombre + "!");
    } else {
        let mensaje = document.getElementById("MensajeRegistro");
        let texto = document.getElementById("MensajeFinal");
        texto.innerHTML = "Gracias por registrarte " + nombre + "!";
        mensaje.style.display = "grid";
    }
}

