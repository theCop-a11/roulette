const opciones = ["$100", "$200", "Jackpot", "Lose", "$300", "Tenes piojitos", "Free Spin", "Try Again"];

function girarRuleta() {
    const ruleta = document.getElementById('ruleta');
    const resultado = document.getElementById('resultado');
    const btnGirar = document.getElementById('btnGirar');
    
    const anguloGanador = 110; // El ángulo de la opción ganadora
    const vueltasCompletas = Math.floor(Math.random() * 3 + 5); // De 5 a 7 vueltas completas
    const rotacion = vueltasCompletas * 360 + anguloGanador; // Total de rotación

    ruleta.style.transform = `rotate(${rotacion}deg)`;

    // Calcula la opción ganadora después de la animación
    setTimeout(() => {
        resultado.textContent = `Resultado: ${opciones[5]}`; // Siempre la opción número 3
        btnGirar.style.display = 'none';
        
        confetti();
    }, 6000); // Espera a que termine la animación (6 segundos)
}