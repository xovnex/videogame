document.getElementById("calcularBtn").addEventListener("click", function () {
  // Obtener valores de las entradas
  const misiones = parseInt(document.getElementById("misiones").value);
  const enemigos = parseInt(document.getElementById("enemigos").value);
  const recompensa = document.getElementById("recompensa").value;

  // Inicializar el total de recompensas
  let total = 0;

  // Lógica de cálculo según el tipo de recompensa
  if (recompensa === "oro") {
    total = misiones * 100 + enemigos * 10;
  } else if (recompensa === "gemas") {
    total = misiones * 5 + enemigos * 1;
  } else if (recompensa === "experiencia") {
    total = misiones * 500 + enemigos * 100;
  }

  // Mostrar el resultado en la página
  document.getElementById("resultado").textContent =
    "Total de recompensas: " + total;
});
