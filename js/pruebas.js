//Cotización de servicios ofrecidos por Melanie Villar//
const enviar = document.querySelector("#enviar")
enviar.addEventListener("click", function (e) {
e.preventDefault();
Swal.fire({
    title: '¡Gracias por comunicarte!',
    text: 'Te voy a estar contactando a a brevedad',
    icon: 'success',
    confirmButtonText: '¡Listo!'})
})

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

const json = JSON.stringify(servicioA);
localStorage.setItem("usuario", json);

console.log(JSON.parse(localStorage.getItem("usuario")));

let serviciosGenerales = [servicioA, servicioB, servicioC];

const listaNombres = serviciosGenerales.map(servicio => servicio.nombre);
const nombresServicios = (listaNombres);

let calculoDescuento = 0;

let cotizacion = document.getElementById("servicios");

let botonservicioA = document.getElementById("servicioA");
let botonservicioB = document.getElementById("servicioB");
let botonservicioC = document.getElementById("servicioC");

botonservicioA.addEventListener("click", function () {
    filtrarServicios("Redaccion");
});

botonservicioB.addEventListener("click", function () {
    filtrarServicios("Marketing");
});

botonservicioC.addEventListener("click", function () {
    filtrarServicios("Asesoria");
});

function filtrarServicios(nombre) {
    let lista = serviciosGenerales.filter(
        (servicio) => servicio.nombre == nombre
    );
    selectServicios.innerHTML = "";
    render(lista);
}

selectServicios.addEventListener("change", inputHandler);

function inputHandler(e) {
    cotizar(e.target.value);
}

let input = document.getElementById("inputNumber3");

input.addEventListener("input", inputHandler);

function cotizar(nombreServicio) {
    let valor;
    switch (nombreServicio) {
        case "Redaccion":
        valor = descuentoAgosto(servicioA.precio, 0.15);
        serviciosSeleccionados.innerText =
            "Por descuento, el servicio te queda a solo $" + valor;
        break;
        case "Marketing":
        valor = descuentoAgosto(servicioB.precio, 0.1);
        serviciosSeleccionados.innerText =
            "Por descuento, el servicio te queda a solo $" + valor;
        break;
        case "Asesoria":
        valor = descuentoAgosto(servicioC.precio, 0.2);
        serviciosSeleccionados.innerText =
            "Por descuento, el servicio te queda a solo $" + valor;
        break;
        default:
        serviciosSeleccionados.innerText =
            "Dejame tu consulta específica y te voy a estar respondiendo a la brevedad";
        break;
    }
}