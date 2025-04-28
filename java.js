const currentPath = window.location.pathname;
document.querySelectorAll(".nav-link").forEach(link => {
  const href = link.getAttribute("href");
  if (currentPath.endsWith(href)) {
    link.classList.add("active");
  }
});


function calcularResultado() {
  const respuestas = [
    document.querySelector('input[name="pregunta1"]:checked')?.value,
    document.querySelector('input[name="pregunta2"]:checked')?.value,
    document.querySelector('input[name="pregunta3"]:checked')?.value
  ];

  if (respuestas.includes(undefined)) {
    alert("Por favor responde todas las preguntas.");
    return;
  }

  // Contar respuestas
  const conteo = { A: 0, B: 0, C: 0 };
  respuestas.forEach(r => conteo[r]++);

  let mayor = "A";
  if (conteo.B > conteo[mayor]) mayor = "B";
  if (conteo.C > conteo[mayor]) mayor = "C";

  let resultadoTexto = "";
  if (mayor === "A") {
    resultadoTexto = "<strong>Curso de Arte y Creatividad</strong><br>Ideal si amas crear, imaginar y expresarte.";
  } else if (mayor === "B") {
    resultadoTexto = "<strong>Curso al Aire Libre</strong><br>Perfecto para chicos activos y aventureros.";
  } else {
    resultadoTexto = "<strong>Curso de Habilidades para el Futuro</strong><br>Conocerás programación, robótica y herramientas digitales.";
  }

  document.getElementById("textoResultado").innerHTML = resultadoTexto;
  document.getElementById("resultadoCurso").classList.remove("d-none");
}
function voltearCarta(elemento) {
  const carta = elemento.querySelector('.carta');
  carta.classList.toggle('carta-volteada');
}


let coloresSeleccionados = [];

  const combinacionesEspeciales = {
    // Mezclas especiales conocidas
    '#f4b400#4285f4': '#34a853', // Amarillo + Azul = Verde vivo
    '#4285f4#f4b400': '#34a853',
    '#db4437#4285f4': '#800080', // Rojo + Azul = Púrpura
    '#4285f4#db4437': '#800080',
    '#db4437#f4b400': '#ff8c00', // Rojo + Amarillo = Naranja fuerte
    '#f4b400#db4437': '#ff8c00',
  };

  const mensajes = [
    "¡Gran mezcla!",
    "¡Qué color tan bonito!",
    "¡Súper creativo!",
    "¡Increíble combinación!",
    "¡Colores mágicos!",
    "¡Mezcla fantástica!"
  ];

  function seleccionarColor(color) {
    if (coloresSeleccionados.length < 2) {
      coloresSeleccionados.push(color);
    }

    if (coloresSeleccionados.length === 2) {
      mezclarColores();
    }
  }

  function mezclarColores() {
    const color1 = coloresSeleccionados[0];
    const color2 = coloresSeleccionados[1];
    const resultado = document.getElementById('color-resultado');
    const mensaje = document.getElementById('mensaje-mezcla');

    // Verificar combinaciones especiales
    let colorMezclado = combinacionesEspeciales[color1 + color2];

    if (!colorMezclado) {
      const rgb1 = hexToRgb(color1);
      const rgb2 = hexToRgb(color2);

      const r = Math.floor((rgb1.r + rgb2.r) / 2);
      const g = Math.floor((rgb1.g + rgb2.g) / 2);
      const b = Math.floor((rgb1.b + rgb2.b) / 2);

      colorMezclado = `rgb(${r}, ${g}, ${b})`;
    }

    resultado.style.backgroundColor = colorMezclado;

    // Animación de brillo
    resultado.classList.remove('animacion-brillo');
    void resultado.offsetWidth;
    resultado.classList.add('animacion-brillo');

    // Mostrar mensaje aleatorio
    mensaje.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensaje.classList.add('mostrar');

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
      mensaje.classList.remove('mostrar');
    }, 2000);

    // Reset
    coloresSeleccionados = [];
  }

  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }