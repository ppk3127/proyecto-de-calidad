const productos = [
  { id: 1, nombre: "Hamburguesa Clásica", precio: 12.00, img: "img/burger1.webp" },
  { id: 2, nombre: "Cheeseburger", precio: 14.00, img: "img/cheese burguer.webp" },
  { id: 3, nombre: "Hamburguesa Doble", precio: 18.00, promo: true, img: "img/hamburguesa doble.jpg" },
  { id: 4, nombre: "Combo Papas + Gaseosa", precio: 10.00, promo: true, img: "img/combo.jpg" },
  { id: 5, nombre: "Papas Fritas", precio: 6.00, img: "img/papas fritas.jpg" },
  { id: 6, nombre: "Gaseosa 500ml", precio: 4.50, img: "img/gaseosa.webp" },
];


let carrito = [];

function mostrarProductos(){
  const cont = document.getElementById("productos");
  productos.forEach(p=>{
    const div=document.createElement("div");
    div.className="producto";
    div.innerHTML=`
      ${p.promo?`<div class="oferta">¡Promo!</div>`:""}
      <img src="${p.img}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <p>S/. ${p.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${p.id})">Agregar</button>`;
    cont.appendChild(div);
  });
}

function agregarAlCarrito(id){
  const p=productos.find(x=>x.id===id);
  carrito.push(p);
  actualizarCarrito();
}

function actualizarCarrito(){
  const ul=document.getElementById("lista-carrito");
  const cant=document.getElementById("cantidad-carrito");
  const tot=document.getElementById("total");
  ul.innerHTML="";
  let suma=0;
  carrito.forEach((item,i)=>{
    suma+=item.precio;
    const li=document.createElement("li");
    li.textContent=`${item.nombre} - S/. ${item.precio.toFixed(2)}`;
    const btn=document.createElement("button");
    btn.textContent="❌"; btn.onclick=()=>{carrito.splice(i,1); actualizarCarrito()};
    li.appendChild(btn);
    ul.appendChild(li);
  });
  cant.textContent=carrito.length;
  tot.textContent=suma.toFixed(2);
}

function vaciarCarrito(){carrito=[];actualizarCarrito()}
function toggleCarrito(){document.getElementById("carrito-container").classList.toggle("carrito-oculto")}

mostrarProductos();
