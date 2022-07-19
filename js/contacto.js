//Usando opciones de motivos para contactarse//

let nombreServicioA = "Redacción"
let precioServicioA = 15000

let nombreServicioB = "Marketing Digital"
let precioServicioB = 10000

let nombreServicioC = "Asesoría"
let precioServicioC = 20000

let cotizacionAprox = 0;

function descuentoAgosto (precio, descuento){
    return precio * porcentaje
    alert ("El servicio tiene un costo aproximado de $" + cotizacionAprox);
}

let tiposServicios = prompt ("¿Cuántos servicios estás interesado en cotizar?\nActualmente tengo calendario abierto para\nRedacción\nMarketing Digital\nAsesoría")
let cotizacion1 = prompt ("¿Qué servicio es el que te interesa cotizar?\nRedacción\nMarketing Digital\nAsesoría").toLowerCase()

for ( let i = 0 ; i < tiposServicios; i++ ){ 
    if (cotizacion1 == "Redacción"){
        cotizacionAprox += precioServicioA
        descuentoJulio (precioServicioA, 0.15) 
    }
    else if (cotizacion1 == "Marketing Digital"){
        cotizacionAprox += precioServicioB
        descuentoJulio (precioServicioB, 0.10) 
    }
    else if (cotizacion1 == "Asesoría"){
        cotizacionAprox += precioServicioC
        descuentoJulio (precioServicioB, 0.20) 
    }
    else {
        prompt ("Dejame tu consulta específica y un mail, y te voy a estar respondiendo a la brevedad")
        break; 
    }
    }
    alert ("El presupuesto total aproximado por los servicios consultados es de $" + cotizacionAprox)
    prompt ("Gracias por contactarte conmigo, dejame un mail y me voy a estar comunicando a la brevedad")


