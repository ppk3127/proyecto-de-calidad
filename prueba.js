// ejemplo 0

function hola() {
  console.log("Hola mundo");
}
hola();

//ejemplo 1

const nombre = "Josue";
console.log("Hola " + nombre);

//ejemplo 2

function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 10));

//ejemplo 3

let x = 10;
if ((x = 5)) {
  console.log("Es cinco");
}
// ejemplo 4

const frutas = ["manzana", "pera", "uva"];
frutas.forEach((fruta) => {
  console.log(fruta);
});
