//variables
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,12];
numeros = numeros.sort(()=>{return Math.random()-0.5})
console.log(numeros);
const carta = document.querySelectorAll('.carta');
const iniciar = document.querySelector(".iniciar");
 //eventos
 document.addEventListener("DOMContentLoaded",() => {
  iniciarApp();
 })
 iniciar.addEventListener("click", () => {
  tiempo();
 }
 )
 //funciones
 function iniciarApp() {
  for (let i = 0; i < carta.length; i++) {
    carta[i].disable = true;
  }
 }
