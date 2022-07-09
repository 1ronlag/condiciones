/**********************************************************************
 * Desafio parte 3: al hacer click a la opción ingresar se debe verificar que el password sea 911 
 * y en ese caso mostrar debajo del botón ingresar, un párrafo con el contenido "password 1 correcto", 
 * en caso de que el password sea 714 se debe mostrar en el párrafo "password 2 es correcto", si ingresa otro
 * valor se debe mostrar "password incorrecto".
 **********************************************************************/
 let button3 = document.querySelector("#submit");
 button3.addEventListener("click", (e) => {
 
     let cod1 = document.getElementById("pass1").value;
     let cod2 = document.getElementById("pass2").value;
     let cod3 = document.getElementById("pass3").value;
 
     const password = cod1 + cod2 +cod3;
 
     if (password ==="911"){
     document.querySelector("#msnresult").innerHTML ="Password 1 Correcto";
     
     }else if (password === "714"){
       document.getElementById("msnresult").innerHTML ="Password 2 Correcto";
     }
     else{
       document.getElementById("msnresult").innerHTML ="password incorrecto";
     
       {
       }
     }
   }
 );
 