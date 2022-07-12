//Usando opciones de motivos para contactarse//

let nombreServicioA = "Redacción"
let precioServicioA = 15000

let nombreServicioB = "Marketing Digital"
let precioServicioB = 10000

let nombreServicioC = "Asesoría"
let precioServicioC = 20000

let cotizacion1 = prompt ("¿Qué servicio es el que te interesa cotizar?\nRedacción \nMarketing Digital \nAsesoría")

if (cotizacion1 == "Redacción"){
    alert ("El servicio tiene un costo aproximado de $" + precioServicioA)
}
else if (cotizacion1 == "Marketing Digital"){
    alert ("El servicio tiene un costo aproximado de $" + precioServicioB)
}
else if (cotizacion1 == "Asesoría"){
    alert ("El servicio tiene un costo aproximado de $" + precioServicioC)
}
else {
    prompt ("Dejame tu consulta específica y un mail, y te voy a estar respondiendo a la brevedad")
}
prompt ("Gracias por contactarte conmigo, dejame un mail y me voy a estar comunicando a la brevedad")