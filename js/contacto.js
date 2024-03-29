//Cotización de servicios ofrecidos por Melanie Villar//

//Declaración de servicios//
let nombreServicioA = "Redaccion";
let precioServicioA = 15000;

let nombreServicioB = "Marketing";
let precioServicioB = 10000;

let nombreServicioC = "Asesoria";
let precioServicioC = 20000;

let cotizacionAprox = 0;
let descuento = 0; 

//Implementación de un descuento de porcentaje variable dependiendo del servicio a cotizar//
function descuentoJulio (cotizacionAprox, descuento){
    return cotizacionAprox - (cotizacionAprox * descuento)
};

//Objeto y Array de Servicios//
class Servicios {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
};

const servicioA = new Servicios (nombreServicioA, precioServicioA);
const servicioB = new Servicios (nombreServicioB, precioServicioB);
const servicioC = new Servicios (nombreServicioC, precioServicioC);

let serviciosGenerales = [servicioA, servicioB, servicioC];

const listaNombres = serviciosGenerales.map(servicio => servicio.nombre);
const nombresServicios = (listaNombres);


//Simulación de cotización//
let cotizacion1 = prompt ("¿Cuáles son servicios que estás interesado en cotizar?\nActualmente tengo calendario abierto para: " + nombresServicios);

let calculoDescuento;

switch (cotizacion1){
    case "Redaccion":
        cotizacionAprox += servicioA.precio
        calculoDescuento = descuentoJulio(cotizacionAprox, 0.15)
        alert ("Por descuento, el servicio te queda a solo $" + calculoDescuento + "(\nVálido por todo el mes de julio)");
        break;
    case "Marketing":
        cotizacionAprox += servicioB.precio
        calculoDescuento = descuentoJulio(cotizacionAprox, 0.1)
        alert ("Por descuento, el servicio te queda a solo $" + calculoDescuento + "(\nVálido por todo el mes de julio)");
        break;
    case "Asesoria":
        cotizacionAprox += servicioC.precio
        calculoDescuento = descuentoJulio(cotizacionAprox, 0.2)
        alert ("Por descuento, el servicio te queda a solo $" + calculoDescuento + "(\nVálido por todo el mes de julio)");
        break;
    default:
        prompt ("Dejame tu consulta específica y un mail, te voy a estar respondiendo a la brevedad");
        break;
};

alert ("El presupuesto total aproximado por los servicios consultados es de $" + cotizacionAprox);

prompt ("Gracias por contactarte conmigo, dejame un mail y me voy a estar comunicando a la brevedad");


/*La idea es en el siguiente mes solo tener descuento para los servicios que superen cierto monto, o aplicar alguna promoción esepecial al contratarlos
let descuentoCondicional = serviciosGenerales.filter((servicio) => servicio.precio >= 15000)*/