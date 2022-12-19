const productos = [{
  id: 1,
  nombre: "Buzo color negro con estampado de Marvel",
  precio: 4000
}, {
  id: 2,
  nombre: "Buzo color blanco con estampado de DC",
  precio: 3900
},
{
  id: 3,
  nombre: "Remera color gris con estampado de Marvel",
  precio: 4100
},
{
  id: 4,
  nombre: "Remera color negro con estampado de Marvel",
  precio: 4100
},
{
  id: 5,
  nombre: "Remera color negro con estampado de DC",
  precio: 4200
},
{
  id: 6,
  nombre: "Pantalón color azul con estampado Star Wars",
  precio: 4500
},
{
  id: 7,
  nombre: "Pantalón color azul con estampado Star Wars",
  precio: 3700
},
{
  id: 8,
  nombre: "Pantalón color azul con estampado Star Wars",
  precio: 3900
},
{
  id: 9,
  nombre: "Pijama color negro con estampado DC",
  precio: 6000
},
{
  id: 10,
  nombre: "Pijama color negro con estampado Marvel",
  precio: 6000
}];

// Librería Sweet Alert

Swal.fire({
  title: 'Bienvenido',
  text: '¿Quieres continuar a la página?',
  icon: 'success',
  confirmButtonText: 'Aceptar'
})

let shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("btn-carrito")
console.log(verCarrito)
const contenidoCarrito = document.getElementById("contentCarrito")

console.log(shopContent)

shopContent.innerHTML = '<img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" width="400px">'



//Creación de Contenidos de Productos con Promesa "Al estar resuelta la promesa muestra los productos después de 3 segundos"

const solicitarProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })
}

let productosCargados = [];

// De la promesa recibe el array productos

const renderProductos = (arr) => {

  shopContent.innerHTML = ""
  productos.forEach((product) => {
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
            <h3 class="card" style="width: 18rem;">${product.nombre}</h3>
            <p class="card-text">${product.precio}</p>
    `;

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar"
    comprar.className = "comprar"
    content.append(comprar)

    shopContent.append(content)

    comprar.addEventListener("click", () => {
      carrito.push(
        {
          id: product.id,
          nombre: product.nombre,
          precio: product.precio
        }
      )
      console.log(carrito)
    })

  })
}

// Pedimos datos y Generamos vista con Asincronía
solicitarProductos()
  .then((res) => {
    productosCargados = res
    renderProductos(productosCargados)
  })

  .catch(() => {
    console.log("Error")
  })

  .finally(() => {
    console.log("Finally")
  })


// Array "Carrito"

let carrito = []

function actualizarCarrito() {

  contenidoCarrito.innerHTML = ""
  const modalHeader = document.createElement("div")
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `

  <h1>Carrito</h1>

  `;

  contenidoCarrito.append(modalHeader)

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.innerHTML = `
    <img></img>
    <h3>${product.nombre}</h3>
    <p>${product.precio}<p>
    `;
    contenidoCarrito.append(carritoContent)

    let eliminar = document.createElement("span")
    eliminar.textContent = "X"
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)

  })

  const total = carrito.reduce((acc, el) => acc + el.precio, 0)

  console.log(total)

  contenidoCarrito.append(total)
  console.log(carrito)

}

verCarrito.addEventListener("click", actualizarCarrito)


const eliminarProducto = () => {

  console.log("eliminado")
  const foundId = carrito.find((element) => element.id)
  console.log(foundId)
  carrito = carrito.filter((carritoId) => {
    return carritoId != foundId;
  })
  actualizarCarrito()
}

// LocalStorage

localStorage.setItem('productos', [productos]);

localStorage.setItem('carrito', [carrito]);

let prod = localStorage.getItem('productos');

let car = localStorage.getItem('carrito');

console.log(prod);
console.log(car);


//Consumo 

let characters = document.getElementById('characters')

fetch('https://rickandmortyapi.com/api/character')
.then((response)=> response.json())
.then((data)=>{
    console.log(data)

    data.results.map((item)=>{
        const content = document.createElement("div")
        content.innerHTML = `
        <h4>${item.name}</h4>
        <h4>${item.species}</h4>
        <h4>${item.status}</h4>
        <img src="${item.image}">
        `;

        characters.append(content)
    })

})
