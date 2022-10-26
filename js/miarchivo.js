// Consigna

// Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
// Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
// Armar la estructura HTML del proyecto.
// Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
// Utilizar funciones para realizar esas operaciones.

// Formato

// Página HTML y código fuente en JavaScript. Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por ““PreEntrega1+Apellido””.

// Aspectos a incluir

// Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador

// Ejemplo

// Calcular costo total de productos y/o servicios seleccionados por el usuario.
// Calcular pagos en cuotas sobre un monto determinado.
// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
// Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados.
// Calcular edad promedio de personas registradas.
// Calcular nota final de alumnos ingresados.

// Sugerencias

// Algunos criterios a tener en cuenta para seleccionar un proceso a simular por primera vez son: 
// “ELEGIR UN PROCESO BIEN CONOCIDO”: Si conozco una situación que implique adquirir cierta información y estoy bien familiarizado en “cómo se hace”, es más fácil traducir la solución a un lenguaje de programación.
// “ELEGIR UN PROCESO QUE ME RESULTE INTERESANTE”: Si me siento motivado sobre el tema, es más llevadero enfrentar los retos de desarrollo e interpretación. Antes de programar existe la etapa de relevamiento y análisis que me permite identificar cómo solucionar el proceso.

// Variables, ciclo y funciones

// Producto, stock y precios de productos.
let nombreProducto1 = "Buzo color negro con estampado de Marvel";
let precioProducto1 = 4000;
let cantidadProducto1 = 5;

let nombreProducto2 = "Buzo color blanco con estampado de DC";
let precioProducto2 = 3900;
let cantidadProducto2 = 13;

let nombreProducto3 = "Remera color gris con estampado de Marvel";
let precioProducto3 = 4100;
let cantidadProducto3 = 6;

let nombreProducto4 = "Remera color negro con estampado de Marvel";
let precioProducto4 = 4100;
let cantidadProducto4 = 15;

let nombreProducto5 = "Remera color negro con estampado de DC";
let precioProducto5 = 4200;
let cantidadProducto5 = 8;

let nombreProducto6 = "Sueter color azul con estampado Star Wars";
let precioProducto6 = 4500;
let cantidadProducto6 = 14;

const DESCUENTOMARVEL = 0.1;
const DESCUENTODC = 0.2;


function seleccionProducto() {
    switch (producto) {
        case "1": {
            alert("Selecciono el producto " + nombreProducto1 + ", este tiene un precio inicial de $" + precioProducto1 + " y contamos con una disponibilidad en stock de " + cantidadProducto1 + " productos.");
            break;
        }
        case "2": {
            alert("Selecciono el producto " + nombreProducto2 + ", este tiene un precio inicial de $" + precioProducto2 + " y contamos con una disponibilidad en stock de " + cantidadProducto2 + " productos.");
            break;
        }
        case "3": {
            alert("Selecciono el producto " + nombreProducto3 + ", este tiene un precio inicial de $" + precioProducto3 + " y contamos con una disponibilidad en stock de " + cantidadProducto3 + " productos.");
            break;
        }
        case "4": {
            alert("Selecciono el producto " + nombreProducto4 + ", este tiene un precio inicial de $" + precioProducto4 + " y contamos con una disponibilidad en stock de " + cantidadProducto4 + " productos.");
            break;
        }
        case "5": {
            alert("Selecciono el producto " + nombreProducto5 + ", este tiene un precio inicial de $" + precioProducto5 + " y contamos con una disponibilidad en stock de " + cantidadProducto5 + " productos.");
            break;
        }
        case "6": {
            alert("Selecciono el producto " + nombreProducto6 + " este tiene un precio inicial de $" + precioProducto6 + " y contamos con una disponibilidad en stock de " + cantidadProducto6 + " productos.");
            break;
        } default: {
            alert("Esta opción de producto no existe, actualice e intente nuevamente.");
        }
    }
}

function aplicacionDescuento() {
    if (producto == "1") {
        descuento = precioProducto1 * DESCUENTOMARVEL;
        precioFinal = precioProducto1 - descuento;
        console.log("El " + nombreProducto1 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
        alert("El " + nombreProducto1 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
    } else if (producto == "2") {
        descuento = precioProducto2 * DESCUENTODC;
        precioFinal = precioProducto2 - descuento;
        console.log("El " + nombreProducto2 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
        alert("El " + nombreProducto2 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
    } else if (producto == "3") {
        descuento = precioProducto3 * DESCUENTOMARVEL;
        precioFinal = precioProducto3 - descuento;
        console.log("El " + nombreProducto3 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
        alert("El " + nombreProducto3 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
    } else if (producto == "4") {
        descuento = precioProducto4 * DESCUENTOMARVEL;
        precioFinal = precioProducto4 - descuento;
        console.log("El " + nombreProducto4 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
        alert("El " + nombreProducto4 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
    } else if (producto == "5") {
        descuento = precioProducto5 * DESCUENTODC;
        precioFinal = precioProducto5 - descuento;
        console.log("El " + nombreProducto5 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
        alert("El " + nombreProducto5 + "Al ser un producto de la marca Marvel, el mismo tiene un descuento del 20% por lo que su precio final es de $" + precioFinal);
    } else if (producto == "6") {
        console.log("El producto no posee descuento su precio es de $" + precioProducto6);
        alert("El producto no posee descuento su precio es de $" + precioProducto6);
    } else {
        console.log("El producto seleccionado no se encuentra dentro del catalogo")
    }
}
// Calculo del stock disponible
function stockDisponible() {
    stock = cantidadProducto1 + cantidadProducto2 + cantidadProducto3 + cantidadProducto4 + cantidadProducto5 + cantidadProducto6;
    console.log("La antigua cifra de stock disponible es = " + stock);
    stock = stock + stockNuevo;
    console.log("La nueva cifra de stock disponible es = " + stock);
}

// Función selección de producto e información de descuento

// // Selección de Producto
let producto = prompt("Seleccione producto deseado: 1-Buzo color negro con estampado de Marvel, 2-Buzo color blanco con estampado de DC, 3-Remera color gris con estampado de Marvel, 4-Remera color negro con estampado de Marvel, 5-Remera color verde con estampado de DC, 6-Sueter color azul con estampado Star Wars")

seleccionProducto(producto)

aplicacionDescuento(producto)

// Ingreso de nuevo stock

stockNuevo = 0
for (let i = 1; i < 7; i++) {
    stockAgregado = parseInt(prompt("Ingrese stock de nuevos productos: "));
    stockNuevo = stockNuevo + stockAgregado;
}
console.log(stockNuevo);

stockDisponible(stockNuevo);

