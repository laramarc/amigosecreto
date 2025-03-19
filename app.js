const listaAmigos = [];
const inputAmigo = document.getElementById ("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

console.log(inputAmigo);

function agregarAmigo() {
  listaAmigos.push(inputAmigo.value);
  ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`
};

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<h1>Tu amigo secreto es: ${amigoSecreto}</h1>`;
};