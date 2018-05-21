// Mandamos a llamar a los elmentos del HTML que se van a manipular
// setTimeout(function(){ }, 5000);
var saludarUsuario = document.getElementById('bienvenida');
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');





function iniciar() {

  mostrarResultados.style.display = '';
  var nombreUsuario = document.getElementById('nombre').value;
  saludarUsuario.innerHTML = "😊 Bienvenid@ " + nombreUsuario + " 😊";

   var respuesta1 = parseInt(document.getElementById('respuestaGonzalo').value);
  if (respuesta1 == 2) {
    respuestasCorrectas.innerHTML = "<h4> 1.¿Cuál es la bebida preferida de Gonzalo?<strong></br>Respuesta correcta:</strong></h4>" + respuesta1 + "🍺 La cerveza 🍺";
  }
  else {
    respuestasIncorrectas.innerHTML = "<h4> 1.¿Cuál es la bebida preferida de Gonzalo?<strong></br>Respuesta Incorrecta</strong></h4>" + respuesta1 +  " Mayor suerte para la próxima";
  }

  var respuesta2 = parseInt(document.getElementById('respuestaLulu').value);
  if (respuesta2 == 1) {
    respuestasCorrectas.innerHTML = "<h4> 2.¿Qué es lo que más le gusta hacer a Lulú?<br><strong>Respuesta correcta:</strong></h4>" +  respuesta2 + "🎤 Cantar 🎤";
  }
  else {
    respuestasIncorrectas.innerHTML = "<h4> Respuesta Incorrecta </h4></br>Respuesta Incorrecta</strong>" + respuesta2 + " Mayor suerte para la próxima";
  }

}
    // Evaluamos las respuestas del usuario (para iniciar el juego)

  /* mostrarResultados.style.display = '';
  if (iniciarPartida == 2) {//CASO 1; EN EL QUE EL USUARIO NO QUIERA JUGAR
    mostrarResultados.innerHTML =  "<h1>Gracias por visitarnos, nos vemos la próxima 😉 </h1>";
  }*/


    //alert("Recuerda ingresar el número que corresponde a tu respuesta 😉");

    /* PRIMERA PREGUNTA */
  /*  var primeraPregunta = parseInt(prompt("1.¿Cuál es la bebida preferida de Gonzalo? \n 1. Agua \n 2. Cerveza \n 3. Vino"));
    if (primeraPregunta == 2) { //Ejemplo de opción con NÚMERO
      respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
    } else {
      respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
    }
    //SEGUNDA PREGUNTA
    var segundaPregunta = prompt("2.¿Qué es lo que más le gusta hacer a Lulú? \n A. Cantar \n B. Dibujar \n C. Programar");
    if (segundaPregunta == "A") { //Ejemplo de opción con LETRA
      //respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
      respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    } else {
      respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    }*/



function limpiar() {
  saludarUsario.innerHTML = "😊 Bienvenid@ 😊" ;
  respuestasCorrectas.innerHTML = "";
  respuestasIncorrectas.innerHTML = "";
  mostrarResultados.style.display = 'none';

}
