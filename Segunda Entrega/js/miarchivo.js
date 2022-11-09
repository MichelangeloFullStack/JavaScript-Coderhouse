// Estructura, variables y objetos

// Objetivos generales

// ✓ Codificar la funcionalidad inicial del simulador. 
// ✓ Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

// Formato

// ✓ Página HTML y código fuente en JavaScript. Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por “PreEntrega2+Apellido”.

// Objetivos específicos

// ✓ Capturar entradas mediante prompt().
// ✓ Declarar variables y objetos necesarios para simular el proceso seleccionado.
// ✓ Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
// ✓ Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().

// Sugerencias

// ✓ Si bien, por el momento solo podemos hacer entradas con prompt() y salidas con alert() o console.log(), es suficiente para empezar a pensar el proceso a simular en términos de entradas, variables, estructuras, funciones, métodos y alidas. Verificar Rúbrica

// Se debe entregar

// ✓ Estructura HTML del proyecto. 
// ✓ Variables de JS necesarias. 
// ✓ Funciones esenciales del proceso a simular.
// ✓ Objetos de JS.
// ✓ Arrays.
// ✓ Métodos de búsqueda y filtrado sobre el Array.

// Para tener en cuenta

// ✓ La estructura hace referencia a el html y css, correspondientes al armado de la página general, pero que el JS que se evalúa, aún no está interactuando con ella.

const CARRITO = [];
let totalCompra = 0;
const IVA = 1.21;

// Función para cálculo de IVA
function calculoIVA() {
    totalCompra *= IVA;
    alert("El monto a pagar luego de aplicado el IVA es de $" + totalCompra);
}

//Clase Productos 
class Producto {
    constructor(id, nombre, precio, stock, talle) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.talle = talle;
    }
}

// Creación de objetos productosmediante la Clase Producto
const producto1 = new Producto(1, "Buzo color negro con estampado de Marvel", 4000, 4, "Unica");
const producto2 = new Producto(2, "Buzo color blanco con estampado de DC", 3900, 5, "Unica");
const producto3 = new Producto(3, "Remera color gris con estampado de Marvel", 4100, 2, "Unica");
const producto4 = new Producto(4, "Remera color negro con estampado de Marvel", 4100, 4, "Unica");
const producto5 = new Producto(5, "Remera color negro con estampado de DC", 4200, 3, "Unica");
const producto6 = new Producto(6, "Pantalón color azul con estampado Star Wars", 4500, 1, "Unica");


// Agregar productos a el array productos

const PRODUCTOS = [producto1, producto2, producto3, producto4, producto5, producto6];

console.log(PRODUCTOS);

// Recorrido del array para muestra al usuario

// // Recorrido con forEach()

// alert("Nuestros productos son:")
// PRODUCTOS.forEach((obj) => {
// alert(obj.nombre+" y su precio es $"+ obj.precio+", lo tenemos disponible en talle "+obj.talle)
// });

// // Recorrido con un for...of...

// alert("Nuestros productos son:")
// for (let obj of PRODUCTOS) {
//         alert("El producto es "+obj.nombre+" y su precio es $"+ obj.precio+", lo tenemos disponible en talle "+obj.talle);
//     }

let opcion = 1;

while (opcion == 1) {

    // Selecciona producto a comprar
    let eleccion = parseInt(prompt('¿Qué productos desea comprar? Agregue su número de ID \n 1-Buzo color negro con estampado de Marvel \n 2-Buzo color blanco con estampado de DC \n 3-Remera color gris con estampado de Marvel \n 4-Remera color negro con estampado de Marvel \n 5-Remera color negro con estampado de DC \n 6-Pantalón color azul con estampado Star Wars'));

    // Evalua el producto seleccionado, verifica existencia, agrega al carrito, suma el precio al total, disminuye el stock y comunica al usuario el producto que selecciono y le indica además lo que queda en existencia de ese producto

    switch (eleccion) {

        case 1:
            if (producto1.stock > 0) {
                CARRITO.push(producto1);
                totalCompra = totalCompra + producto1.precio;
                producto1.stock -= 1;
                alert("Agregaste en el carrito " + producto1.nombre + ", y quedan disponible " + producto1.stock)
            }
            else {
                alert("No hay stock")
            }
            break;
        case 2:
            if (producto2.stock > 0) {
                CARRITO.push(producto2);
                totalCompra = totalCompra + producto2.precio;
                producto2.stock = producto2.stock - 1;
                alert("Agregaste en el carrito " + producto2.nombre + ", y quedan disponible " + producto2.stock);
            }
            else {
                alert("No hay stock")
            }
            break;
        case 3:
            if (producto3.stock > 0) {
                CARRITO.push(producto3);
                totalCompra = totalCompra + producto3.precio;
                producto3.stock = producto3.stock - 1;
                alert("Agregaste en el carrito " + producto3.nombre + ", y quedan disponible " + producto3.stock);
            }
            else {
                alert("No hay stock")
            }
            break;
        case 4:
            if (producto4.stock > 0) {
                CARRITO.push(producto4);
                totalCompra = totalCompra + producto4.precio;
                producto4.stock = producto4.stock - 1;
                alert("Agregaste en el carrito " + producto4.nombre + ", y quedan disponible " + producto4.stock);
            }
            else {
                alert("No hay stock")
            }
            break;

        case 5:
            if (producto5.stock > 0) {
                CARRITO.push(producto5);
                totalCompra = totalCompra + producto5.precio;
                producto5.stock = producto5.stock - 1;
                alert("Agregaste en el carrito " + producto5.nombre + ", y quedan disponible " + producto5.stock);
            }
            else {
                alert("No hay stock")
            }
            break;
        case 6:
            if (producto6.stock > 0) {
                CARRITO.push(producto6);
                totalCompra = totalCompra + producto6.precio;
                producto6.stock = producto6.stock - 1;
                alert("Agregaste en el carrito " + producto6.nombre + ", y quedan disponible " + producto6.stock);
            }
            else {
                alert("No hay stock")
            } break;
    }

    // Se consulta al usuario si desea continuar con la compra
    opcion = prompt("Desea seguir comprando? 1- Si 2- No");

    if (opcion != 1) {

        let totalPagar = CARRITO.map(el => el.precio).reduce((totalAnterior, totalActual) => totalAnterior + totalActual, 0);

        // Sin aplicación de IVA
        alert("Compra procesada, el total a pagar sin el IVA es de: $" + totalPagar);

        // Aplicacióm del IVA
        calculoIVA(totalCompra);
    }
}


