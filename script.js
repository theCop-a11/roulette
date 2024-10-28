const opciones = ["$100", "$200", "Jackpot", "Lose", "$300", "$400", "Free Spin", "Try Again"];

function girarRuleta() {
    const ruleta = document.getElementById('ruleta');
    const resultado = document.getElementById('resultado');
    
    // Rotación aleatoria (entre 3 y 7 vueltas completas)
    const rotacion = Math.floor(Math.random() * 360 + 1440);
    ruleta.style.transform = `rotate(${rotacion}deg)`;

    // Calcula la opción ganadora después de la animación
    setTimeout(() => {
        const anguloFinal = rotacion % 360;
        const indice = Math.floor((360 - anguloFinal) / (360 / opciones.length)) % opciones.length;
        resultado.textContent = `Resultado: ${opciones[indice]}`;
    }, 4000); // Espera a que termine la animación (4 segundos)
}