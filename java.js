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