//Cotización de servicios ofrecidos por Melanie Villar//

let cotizacionAprox = 0;
let descuento = 0; 

function descuentoJulio (cotizacionAprox, descuento){
    const calculoDescuento = cotizacionAprox - (cotizacionAprox * descuento)}

let resultadoDescuento = descuentoJulio (cotizacionAprox, descuento)

class Servicios {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const servicioA = new Servicios (Redaccion, 15000)
const servicioB = new Servicios (Marketing, 10000)
const servicioC = new Servicios (Asesoria, 20000)

let serviciosGenerales = [servicioA, servicioB, servicioC]

let nombresServicios = []

function listaNombresServicios (){
    for (const servicio of serviciosGenerales){
        nombresServicios.push (servicio.nombre)
    }
}

listaNombresServicios()

let cotizacion1 = prompt ("¿Cuáles son servicios que estás interesado en cotizar?\nActualmente tengo calendario abierto para:" + nombresServicios.join("\n "))

switch (cotizacion1){
    case "Redaccion":
        cotizacionAprox += (servicioA.precio) ;
        descuentoJulio (cotizacionAprox, 0.15)
        alert ("El servicio tiene un costo aproximado de $" + resultadoDescuento);
        break;
    case "Marketing":
        cotizacionAprox += (servicioB.precio);
        descuentoJulio (cotizacionAprox, 0.1)
        alert ("El servicio tiene un costo aproximado de $" + resultadoDescuento)
        break;
    case "Asesoria":
        cotizacionAprox += (servicioC.precio);
        descuentoJulio (cotizacionAprox, 0.2)
        alert ("El servicio tiene un costo aproximado de $" + resultadoDescuento)
        break;
    default:
        prompt ("Dejame tu consulta específica y un mail, te voy a estar respondiendo a la brevedad");
        break;
}

alert ("El presupuesto total aproximado por los servicios consultados es de $" + cotizacionAprox)

prompt ("Gracias por contactarte conmigo, dejame un mail y me voy a estar comunicando a la brevedad")