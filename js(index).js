/*const colorRd = () => {
const randomColor = Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = "#" + randomColor;
}

genNew.addEventListener("click", setbg);
setbg();
*/
let wheel = document.querySelector('.wheel');
let spin = document.querySelector('.spin');
let value =  Math.ceil(Math.random() * 3600);

spin.onclick = function(){
  wheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 3600);
  alert();
}