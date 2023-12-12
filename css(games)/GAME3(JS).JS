//variables
let cartasVolteadas = 0;
let carta1 = null;
let carta2 = null;
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];
numeros = numeros.sort(()=>{return Math.random()-0.5});
let aciertos = 0;
let movimientos = 0;


 function voltear(id){

  cartasVolteadas++;
  console.log (numeros);
  


    if(cartasVolteadas == 1){
      carta1 = document.getElementById(id);
      primerResultado = numeros[id];
      carta1.innerHTML = primerResultado;
      
      carta1.disabled = true;
    }else if(cartasVolteadas == 2){
      carta2 = document.getElementById(id);
      segundoResultado = numeros[id];
      carta2.innerHTML = segundoResultado;
      carta2.disabled = true;

      movimientos++;
      mov_estadisticas.innerHTML = movimientos;

      if(primerResultado == segundoResultado){
        cartasVolteadas= 0;

        aciertos++;
        acier_estadisticas.innerHTML = aciertos;
      
        if(movimientos == 12){
          acier_estadisticas.innerHTML = 'aciertos:' + $aciertos + 'Sos un capo';
          mostrarMovimientos.innerHTML = 'movimientos:' + $movimientos + 'Justito capo';
          alert('Felicitaciones lograste ganar el juego con los movimientos perfectos')
        }

      }else{
        setTimeout(()=>{
          carta1.innerHTML = '';
          carta2.innerHTML = '';
          carta1.disabled = false;
          carta2.disabled = false;
          cartasVolteadas = 0;
        },600)
      }
   }
  }