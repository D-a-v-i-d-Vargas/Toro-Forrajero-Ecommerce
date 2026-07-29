// Script Split Text (animación de letras del hero)

function splitText(element, delayStep = 0.04) {
    const nodes = Array.from(element.childNodes);
    element.innerHTML = "";
    let index = 0;

    nodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            // Normaliza saltos de línea, tabs e indentación a un solo espacio
            const cleanText = node.textContent.replace(/\s+/g, " ").trim();
            if (cleanText.length === 0) return;

            const words = cleanText.split(" ");

            words.forEach((word, wIdx) => {
                if (word.length > 0) {
                    // Cada palabra se agrupa en un bloque indivisible
                    // para que el navegador nunca corte a mitad de palabra
                    const wordSpan = document.createElement("span");
                    wordSpan.style.display = "inline-block";

                    word.split("").forEach((char) => {
                        const span = document.createElement("span");
                        span.className = "split-char";
                        span.textContent = char;
                        span.style.animationDelay = `${index * delayStep}s`;
                        index++;
                        wordSpan.appendChild(span);
                    });

                    element.appendChild(wordSpan);
                }

                // Espacio entre palabras (aquí sí puede cortar el navegador)
                if (wIdx < words.length - 1) {
                    const spaceSpan = document.createElement("span");
                    spaceSpan.className = "split-space";
                    spaceSpan.innerHTML = "&nbsp;";
                    element.appendChild(spaceSpan);
                }
            });
        } else {
            // Mantiene elementos como <br> tal cual
            element.appendChild(node.cloneNode(true));
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) splitText(heroTitle);
});