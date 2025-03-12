import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Cuando se carga la página, no hace nada aún
};

document.getElementById("generator").addEventListener("click", generateExcuse);

function generateExcuse() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  // Principios de programación funcional
  // Cada función tiene UN SOLO FIN
  
  const ramdomGenerator = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  
  const extractsAnArrayValue = (arr) => {
    return arr[ramdomGenerator(arr)];
  };
  
  const concatenate = (item1, item2, item3, item4) => {
    return `${item1} ${item2} ${item3} ${item4}`;
  };

  // Generar la excusa
  let excuse = concatenate(
    extractsAnArrayValue(who),
    extractsAnArrayValue(action),
    extractsAnArrayValue(what),
    extractsAnArrayValue(when)
  );
  
  // Mostrar la excusa en el HTML
  document.getElementById("excuse").innerHTML = excuse;
}
