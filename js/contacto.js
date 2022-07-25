//Usando opciones de motivos para contactarse//

let nombreServicioA = "Redacción"
let precioServicioA = 15000

let nombreServicioB = "Marketing Digital"
let precioServicioB = 10000

let nombreServicioC = "Asesoría"
let precioServicioC = 20000

let cotizacionAprox = 0;
let descuento = 0; 

function descuentoJulio (cotizacionAprox, descuento){
    const calculoDescuento = cotizacionAprox - (cotizacionAprox * descuento)
    alert ("Tenés un descuento de $" + calculoDescuento + "\nVálido por todo el mes de julio");
}

let resultadoDescuento = descuentoJulio (cotizacionAprox, descuento)

let tiposServicios = prompt ("¿Cuántos servicios estás interesado en cotizar?\nActualmente tengo calendario abierto para\nRedacción\nMarketing Digital\nAsesoría")
let cotizacion1 = parseInt (prompt ("¿Qué servicio es el que te interesa cotizar? Elegí el número correspondiente\nRedacción(1)\nMarketing Digital(2)\nAsesoría(3)"))

switch (cotizacion1){
    case 1:
        cotizacionAprox += precioServicioA;
        descuentoJulio (cotizacionAprox, 0.15)
        alert ("El servicio tiene un costo aproximado de $" + calculoDescuento);
        break;
    case 2:
        cotizacionAprox += precioServicioB;
        descuentoJulio (cotizacionAprox, 0.1)
        alert ("El servicio tiene un costo aproximado de $" + calculoDescuento)
        break;
    case 3:
        cotizacionAprox += precioServicioC;
        descuentoJulio (cotizacionAprox, 0.2)
        alert ("El servicio tiene un costo aproximado de $" + calculoDescuento)
        break;
    default:
        prompt ("Dejame tu consulta específica y un mail, te voy a estar respondiendo a la brevedad");
        break;
}
alert ("El presupuesto total aproximado por los servicios consultados es de $" + cotizacionAprox)
prompt ("Gracias por contactarte conmigo, dejame un mail y me voy a estar comunicando a la brevedad")
