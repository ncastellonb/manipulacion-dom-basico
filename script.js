//Cómo traemos elementos del html al JS?

//Crearemos variables que representen a los selectores de los elementos del HTLM

//Si queremos seleccionar todos los h1 del HTM que no tienen clases, ni nada, entonces usamos queryselector
const titulos = document.querySelector("h1");
const p = document.querySelector("p");

//Si queremos selección elementos por la clase que tienen, entonces lo llamamos por la clase que tiene:

const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");

const input = document.querySelector("input");

//Veamos qué significan estas variables:

console.log({
    titulos,
    p,
    parrafito,
    pid,
    input,
});

