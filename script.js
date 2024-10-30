const opciones = ["Cachetada", "Ganaste $2000", "Vale por un abrazo", "Vuelve a intentar", "$3000", "Tenes piojitos", "Baile random", "Chiste malo"];
let isDragging = false;
let lastY = 0;
let rotation = 0;
let isSpinning = false;

function cargarOpciones() {
  const contenedor = document.getElementById("ruleta");

  opciones.forEach((texto, index) => {
      const div = document.createElement("div");
      div.className = `opcion opcion-${index + 1}`;
      div.innerHTML = `<span style="color: #c2500e;">•</span><br>` + texto;
      contenedor.appendChild(div);
  });
}

function girarRuleta() {
    if (isSpinning) return; // Evita girar si ya está en movimiento

    const ruleta = document.getElementById('ruleta');
    const flecha = document.querySelector('.flecha');
    const resultado = document.getElementById('resultado');
    const btnGirar = document.getElementById('btnGirar');

    flecha.classList.add('oscilando');
    isSpinning = true; // Bloquea nuevos giros

    const anguloGanador = 110;
    const vueltasCompletas = Math.floor(Math.random() * 3 + 5); // De 5 a 7 vueltas completas
    const rotacionFinal = vueltasCompletas * 360 + anguloGanador;

    ruleta.style.transform = `rotate(${rotacionFinal}deg)`;

    setTimeout(() => {
        flecha.classList.remove('oscilando');
        resultado.textContent = `Resultado: ${opciones[5]}`;
        resultado.style.display = 'block';
        btnGirar.style.display = 'none';
        
        confetti();
    }, 4000); // Espera a que termine la animación
}

function onMouseDown(event) {
    if (isSpinning) return; // Evita arrastrar si ya está en movimiento
    isDragging = true;
    lastY = event.clientY;
}

function onMouseMove(event) {
    if (!isDragging || isSpinning) return; // Evita mover si ya está en movimiento
    const deltaY = lastY - event.clientY;
    rotation += deltaY * 1.5; // Ajusta la sensibilidad del arrastre
    document.getElementById('ruleta').style.transform = `rotate(${rotation}deg)`;
    lastY = event.clientY;
}

function onMouseUp() {
    isDragging = false;
}

function onTouchStart(event) {
    if (isSpinning) return; // Evita arrastrar si ya está en movimiento
    isDragging = true;
    lastY = event.touches[0].clientY;
}

function onTouchMove(event) {
    if (!isDragging || isSpinning) return; // Evita mover si ya está en movimiento
    const deltaY = lastY - event.touches[0].clientY;
    rotation += deltaY * 1.5; // Ajusta la sensibilidad del arrastre
    document.getElementById('ruleta').style.transform = `rotate(${rotation}deg)`;
    lastY = event.touches[0].clientY;
}

function onTouchEnd() {
    isDragging = false;
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    cargarOpciones();

    const ruleta = document.getElementById('ruleta');

    // Agregar eventos para arrastre con el mouse
    ruleta.addEventListener('mousedown', onMouseDown);
    ruleta.addEventListener('mousemove', onMouseMove);
    ruleta.addEventListener('mouseup', onMouseUp);
    ruleta.addEventListener('mouseleave', onMouseUp);

    // Agregar eventos táctiles
    ruleta.addEventListener('touchstart', onTouchStart, { passive: true });
    ruleta.addEventListener('touchmove', onTouchMove, { passive: true });
    ruleta.addEventListener('touchend', onTouchEnd, { passive: true });
});