/**********************************************************************
 * Desafío parte 1:  al hacerle click a la imagen se le debe  
 * agregar un borde rojo de 2 pixeles, al hacerle click nuevamente se le debe quitar el borde.
 **********************************************************************/

let button = document.querySelector("button");
button.addEventListener("click", (e) => {
  if (button.style.borderStyle != "solid") {
    document.getElementById("button")
      .setAttribute("style", "border: solid red 2px; ");
  } else {
    document.getElementById("button").removeAttribute("style");
  }
});


/**********************************************************************
 * Desafío parte 2: Validación de la cantidad de tickets, el numero total no puede ser mayor a 10
 * de lo contrario debe arrojar el  mensaje "llevas demasiados stickers"
 **********************************************************************/

let button1 =document.querySelector("button");
button1.addEventListener("click", (e) =>{


  
}
)





/**********************************************************************
 * Desafio parte 3: al hacer click a la opción ingresar se debe verificar que el password sea 911 
 * y en ese caso mostrar debajo del botón ingresar, un párrafo con el contenido "password 1 correcto", 
 * en caso de que el password sea 714 se debe mostrar en el párrafo "password 2 es correcto", si ingresa otro
 * valor se debe mostrar "password incorrecto".
 **********************************************************************/



