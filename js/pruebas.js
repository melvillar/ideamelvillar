//Cotización de servicios ofrecidos por Melanie Villar//
const enviar = document.querySelector("#enviar")
enviar.addEventListener("click", function (e) {
e.preventDefault();
Swal.fire({
    title: '¡Gracias por comunicarte!',
    text: 'Te voy a estar contactando a la brevedad',
    icon: 'success',
    confirmButtonText: '¡Listo!'})
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'Portfolio',
    body: 'Melanie Villar',
    userId: 1,
}),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
    .then((response) => response.json())
    .then((json) => console.log(json));
});

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
        Swal.fire({
            title: '¡Tenés un descuento solo por este mes!',
            text:"Por descuento, el servicio te queda a solo $" + valor,
            confirmButtonText: '¡Súper!'})
        break;
        case "Marketing":
        valor = descuentoAgosto(servicioB.precio, 0.1);
        Swal.fire({
            title: '¡Tenés un descuento solo por este mes!',
            text:"Por descuento, el servicio te queda a solo $" + valor,
            confirmButtonText: '¡Súper!'})
        break;
        case "Asesoria":
        valor = descuentoAgosto(servicioC.precio, 0.2);
        Swal.fire({
            title: '¡Tenés un descuento solo por este mes!',
            text:"Por descuento, el servicio te queda a solo $" + valor,
            confirmButtonText: '¡Súper!'})
        break;
        default:
            Swal.fire({
                text:"Dejame tu consulta específica y te voy a estar respondiendo a la brevedad",
                confirmButtonText: '¡Súper!'})
        break;
    }
}