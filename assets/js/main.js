/**********************************************************************
 * Desafío parte 1:  al hacerle click a la imagen se le debe  
 * agregar un borde rojo de 2 pixeles, al hacerle click nuevamente se le debe quitar el borde.
 **********************************************************************/
let button = document.querySelector("button");
button.addEventListener("click", (e) => {
  if (button.style.borderStyle != "solid") {
    document.querySelector("#button").setAttribute("style", "border: solid red 2px; ");
  } else {
    document.querySelector("#button").removeAttribute("style");
  }
});
/**********************************************************************
 * Desafío parte 2: Validación de la cantidad de tickets, el numero total no puede ser mayor a 10
 * de lo contrario debe arrojar el  mensaje "llevas demasiados stickers"
 **********************************************************************/

let button2 = document.querySelector("#verification");
button2.addEventListener("click", (e) => {
  let cant1 = document.getElementById("input1").value;
  let cant2 = document.getElementById("input2").value;
  let cant3 = document.getElementById("input3").value;
  let total = parseFloat(cant1) + parseFloat(cant2) + parseFloat(cant3);
  if (isNaN(cant1) || isNaN(cant2) || isNaN(cant3))
    alert("Favor solo ingresar números");
  {
  }
  if (total > 10) {
    document.getElementById("message").innerHTML = "Llevas demasiados cascos";
  } else {
    document.getElementById("message").innerHTML = `llevas ${total} cascos`;
  }
});
