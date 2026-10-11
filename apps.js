let listaDeSuper = [];
listaDeSuper[0] = "sal";
listaDeSuper[1] = "tomates";
listaDeSuper[2] = "patys";

listaDeSuper.push("lechuga", "sprite") 
listaDeSuper.unshift("pan de hamburguesa", "condimentos")
console.log(listaDeSuper.length)
let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();
console.log(listaDeSuper.length)

console.log(listaDeSuper);
console.log("La cantidad de elementos dentro del array es: " + listaDeSuper.length);
console.log("El primer elemento del array es: " + listaDeSuper[0]);
let ultimoElemento = listaDeSuper.length - 1;
console.log("El último elemento del array es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);

function logItems(arreglo) {
  arreglo.forEach(function(elemento) {
    console.log(elemento);
  });
}
let Higiene = ["cepillo de dientes", "pasta de dientes", "papel higiénico"];
console.log("Lista de Súper");
logItems(listaDeSuper);
console.log("Higiéne");
logItems(listadelimpieza);