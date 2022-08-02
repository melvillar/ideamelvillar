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
function descuentoAgosto (cotizacionAprox, descuento){
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

let calculoDescuento = 0;

let cotizacion = document.getElementById("servicios");

function render(lista){
    for(const servicio of lista){
            let presupuesto = document.createElement("div")

            presupuesto.innerHTML= `<h3>${servicio.nombre}</h3>
                            <p>Precio con descuento de Agosto: $ ${serivicio.precio}</p>`
            formulario.append(presupuesto)
    }
}

render(serviciosGenerales)

let botonservicioA = document.getElementById("servicioA")
let botonservicioB = document.getElementById("servicioB")
let botonservicioC = document.getElementById("servicioC")

botonservicioA.addEventListener("click", function(){filtrarServicios("Redaccion")})
botonservicioB.addEventListener("click", function(){filtrarServicios("Marketing")})
botonservicioC.addEventListener("click", function(){filtrarServicios("Asesoria")})

function filtrarServicios(nombre){
    let lista = listaProductos.filter((servicio) =servicio.nombre == nombre)
    cotizacion.innerHTML = ""
    render(lista)
}

cotizacion.addEventListener("servicios", serviciosHandler)

function inputHandler(e){
    presupuesto = e.target.value
    cotizacion()
}

let input = document.getElementById("inputNumber3")

input.addEventListener("input", inputHandler)

function cotizacion() {
    switch (cotizacion){
        case "Redaccion":
            cotizacionAprox += servicioA.precio
            calculoDescuento = descuentoAgosto(cotizacionAprox, 0.15)
            let mensaje1 = document.createElement("h4")
            mensaje.innerText = "Por descuento, el servicio te queda a solo $" + calculoDescuento;
        case "Marketing":
            cotizacionAprox += servicioB.precio
            calculoDescuento = descuentoAgosto(cotizacionAprox, 0.1)
            let mensaje2 = document.createElement("h4")
            mensaje.innerText = "Por descuento, el servicio te queda a solo $" + calculoDescuento;
            break;
        case "Asesoria":
            cotizacionAprox += servicioC.precio
            calculoDescuento = descuentoAgosto(cotizacionAprox, 0.2)
            let mensaje3 = document.createElement("h4")
            mensaje.innerText = "Por descuento, el servicio te queda a solo $" + calculoDescuento;
            break;
        default:
            let mensaje4 = document.createElement("h4")
            mensaje.innerText = "Dejame tu consulta específica y te voy a estar respondiendo a la brevedad";
            break;
    }
}
