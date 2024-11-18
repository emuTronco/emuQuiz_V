const contenedor = document.getElementById("test");
const botonRes = document.getElementById("botonResultado");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. ¿Por cuantas ciudades pasan Sean y Daniel en Life is Strange 2?",
    respuestas: {
      a: "2",
      b: "4",
      c: "5",
      d: "6"
    },
    respuestaCorrecta: "d"
  },
  {
    pregunta: "2. ¿Cómo se llama el Pokemon cuya categoria es Zorro pillo?",
    respuestas: {
      a: "Fennekin",
      b: "Nickit",
      c: "Zorua",
      d: "Vulpix"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta:
      "3. ¿Quién es el ser vivo mas dormilón del mundo?",
    respuestas: {
      a: "Koala",
      b: "Jaquito",
      c: "Gatita malvada",
      d: "Lironcito"
    },
    respuestaCorrecta: "d"
  },
  {
    pregunta: "4. [...], por tu culo se me mete",
    respuestas: {
      a: "3",
      b: "7",
      c: "9",
      d: "13"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta:
      "?aedi adavlam atse odis árbah néiuq eD¿ !oditrevni odis ah otxet lE¡ !on hO¡ .5",
    respuestas: {
      a: "zenorTume",
      b: "ordnajelA",
      c: "otiuqaJ",
      d: "adavlam atitaG"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "6. ¿En que tecla se encuentra la habilidad de Yuumi \"Presteza gatuna\"?",
    respuestas: {
      a: "Q",
      b: "W",
      c: "E",
      d: "R"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta: "7. ¿Cómo se llama el restaurante donde fuimos a comer barbacoa coreana?",
    respuestas: {
      a: "Kim's Barbacoa Coreana",
      b: "Kuili Korean BBQ",
      c: "Qiquihary BBQ",
      d: "Gogi gui"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "8. ¿Cómo se dice \"Vallado\" en alemán?",
    respuestas: {
      a: "Zaun",
      b: "Braum",
      c: "Freljord",
      d: "Shurima"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "9. ¿Cuantas plantas tiene el castillo de Bellver?",
    respuestas: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "10. ¿Quién el amigo de la infancia de Punpun con el que se reencuentra al final del manga?",
    respuestas: {
      a: "Tanaka Aiko",
      b: "Harumi Shuntarou",
      c: "Nanjo Sachi",
      d: "Onodera Yuichi"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta: "11. ¿En que juego de Yakuza tienes que ayudar a un artista callejero que hace de estatua a que vaya al baño y no le vea la gente?",
    respuestas: {
      a: "0",
      b: "Kiwami",
      c: "Like a Dragon",
      d: "Infinite Wealth"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "12. ¿Cual es el célebre lugar favorito de los niños que se encuentra en Sanse?",
    respuestas: {
      a: "Plaza de toros La tercera",
      b: "Micrópolix",
      c: "Dehesa Boyal",
      d: "Plaza norte 2"
    },
    respuestaCorrecta: "b"
  },
  {
    pregunta:
      "13. ¿Quién es el presidente del consejo estudiantil en Persona 3?",
    respuestas: {
      a: "Hidetoshi Odagiri",
      b: "Akihiko Sanada",
      c: "Mitsuru Kirijo",
      d: "Chihiro Fushimi"
    },
    respuestaCorrecta: "c"
  },
  {
    pregunta:
      "14. ¿Cuál es la bebida láctea chocolateada más deliciosa de toda España?",
    respuestas: {
      a: "Laccao",
      b: "Cacaolat",
      c: "Batido OKEY cacao",
      d: "Batido Puleva chocolate"
    },
    respuestaCorrecta: "a"
  },
  {
    pregunta: "15. ¿Cuántas veces se han visto la gatita y el lironcito?",
    respuestas: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    respuestaCorrecta: "c"
  }
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (const letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `
        <div style="display: flex" class = opciones>
          <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
          <label>${preguntaActual.respuestas[letraRespuesta]}</label>
          </div>
        <label>
        `
      );
    }
    preguntasYrespuestas.push(
      `<div class= "pregunta">
      <div class="cuestion">${preguntaActual.pregunta}</div>
      <div class="respuestas"> ${respuestas.join("")} </div></div>`
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  if (respuestasCorrectas < 15)
    resultadoTest.innerHTML =
      "Solo has acertado " +
      respuestasCorrectas +
      " preguntas de " +
      preguntas.length +
      ", seguro que puedes hacerlo mejor.";
  else
    resultadoTest.innerHTML =
      "¡Enhorabuena, has acertado todas las preguntas!" +
      " Ahora, apunta la primera letra/número de cada respuesta correcta.";
}

botonRes.addEventListener("click", mostrarResultado);
