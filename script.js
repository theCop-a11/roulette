const opciones = ["Cachetada", "Ganaste $2000", "Vale por un abrazo", "Vuelve a intentar", "$3000", "Tenes piojitos", "Baile random", "Chiste malo"];

function cargarOpciones() {
  const contenedor = document.getElementById("ruleta");

  opciones.forEach((texto, index) => {
    const div = document.createElement("div");
    div.className = `opcion opcion-${index + 1}`;
    div.textContent = texto;
    contenedor.appendChild(div);
  });
}

function girarRuleta() {
  const ruleta = document.getElementById('ruleta');
  const flecha = document.querySelector('.flecha');
  const resultado = document.getElementById('resultado');
  const btnGirar = document.getElementById('btnGirar');
  
  const anguloGanador = 110; // El ángulo de la opción ganadora
  const vueltasCompletas = Math.floor(Math.random() * 3 + 5); // De 5 a 7 vueltas completas
  const rotacion = vueltasCompletas * 360 + anguloGanador; // Total de rotación

  flecha.classList.add('oscilando');

  ruleta.style.transform = `rotate(${rotacion}deg)`;

  setTimeout(() => {
      flecha.classList.remove('oscilando'); // Detenemos el balanceo de la flecha

      resultado.textContent = `Resultado: ${opciones[5]}`;
      resultado.style.display = 'block';
      btnGirar.style.display = 'none';
      
      confetti();
  }, 4000); // Espera a que termine la animación
}

document.addEventListener("DOMContentLoaded", cargarOpciones);