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


let shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("btn-carrito")
console.log(verCarrito)
const contenidoCarrito = document.getElementById("contentCarrito")

console.log(shopContent)

productos.forEach((product)=>{
  let content = document.createElement("div")
  content.className="thumbnail"
  content.innerHTML = `
          <h3>${product.nombre}</h3>
          <p>${product.precio}</p>
  `;

  let comprar = document.createElement("button")
  comprar.innerText = "comprar"
  comprar.className = "comprar"
  content.append(comprar)

  shopContent.append(content)

  comprar.addEventListener("click",()=>{
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

let carrito = []

function actualizarCarrito(){

  contenidoCarrito.innerHTML=""
  const modalHeader = document.createElement("div")
  modalHeader.className = "modal-header"
  modalHeader.innerHTML=`

  <h1>Carrito</h1>

  `;

  contenidoCarrito.append(modalHeader)

  carrito.forEach((product)=>{
    let carritoContent = document.createElement("div")
    carritoContent.innerHTML = `
    <img></img>
    <h3>${product.nombre}</h3>
    <p>${product.precio}<p>
    `;
    contenidoCarrito.append(carritoContent)

    let eliminar = document.createElement("span")
    eliminar.textContent="X"
    carritoContent.append(eliminar)

    eliminar.addEventListener("click",eliminarProducto)

  })

  const total = carrito.reduce((acc,el)=>acc + el.precio,0)

  console.log(total)

  contenidoCarrito.append(total)
  console.log(carrito)

}

verCarrito.addEventListener("click",actualizarCarrito)


const eliminarProducto=()=>{
  
  console.log("eliminado")
  const foundId = carrito.find((element)=>element.id)
  console.log(foundId)
  carrito = carrito.filter((carritoId)=>{
    return carritoId != foundId;
  })
  actualizarCarrito()
}

// LocalStorage

localStorage.setItem('productos', [productos]);

localStorage.setItem('carrito', [carrito]);

let prod =  localStorage.getItem('productos');

let car =  localStorage.getItem('carrito');

console.log (prod);
console.log (car);