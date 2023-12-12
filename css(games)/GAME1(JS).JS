var block = document.getElementById('block');
//var hole = document.getElementById('hole');
var character = document.getElementById("character")

//BOTÓN DE JUGAR
var bt_run = document.querySelector('.bt_run');
var juego1 = document.querySelector('.juego1');

//CREACION DEL AGUJERO RANDOM
/*hole.addEventListener('animationiteration', () => {
  var random = Math.random()*4;
  var top = (random*100)+150;
  hole.style.top = random + "px";
  console.log(top);
});*/

//CUANDO SE CLICKEA EL BOTÓN DE "JUGAR"...
bt_run.addEventListener("click", function() {
  //OCULTA EL BOTÓN
  bt_run.classList.add("ocultar");
  bt_run.classList.remove("mostrar");

  //MUESTRA EL JUEGO
  juego1.classList.add("mostrar");
  juego1.classList.remove("ocultar");

  //EMPIEZA A CAER EL PAJARITO
  setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top = (characterTop+3)+"px";
    }
  },10)

  /* //OBTIENE POSICIÓN Y TAMAÑO DEL AGUJERO Y LOS IMPRIME (PRUEBA)
    var posHole = hole.getBoundingClientRect();
    console.log("x inicio: " + posHole.x);
    console.log("y inicio: " + posHole.y);
    console.log("ancho: " + posHole.width);
    console.log("alto: " + posHole.height);
  })*/

  //FUNCION SALTAR PERSONAJE
  function jump(){
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (character>6){
    character.style.top = (characterTop-5)+"px";
    }
    if (jumpCount>20){
      clearInterval(jumpInterval);
      jumping=0;
      jumpCount=0;
    }
        jumpCount++;
  } ,10);
  }
});