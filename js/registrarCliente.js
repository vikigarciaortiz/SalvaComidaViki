
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
}