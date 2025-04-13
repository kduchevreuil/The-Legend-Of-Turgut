function checkColorCollision() {
    // Liste des couleurs interdites (en hexadécimal minuscule)
    const prohibitedColors = ["#6ab417", "#ae6c37", "#211640"];

    const turgut = document.getElementById("Turgut");
    const mapOfLand = document.getElementById("mapOfLand");
    const canvas = document.getElementById("canvas");

    if (!turgut || !mapOfLand || !canvas) {
        console.error("Un ou plusieurs éléments nécessaires sont introuvables");
        return;
    }

    const turgutPosition = turgut.getBoundingClientRect();
    const backgroundPosition = mapOfLand.getBoundingClientRect();

    const turgutX = turgutPosition.left - backgroundPosition.left;
    const turgutY = turgutPosition.top - backgroundPosition.top;
    const turgutWidth = turgut.offsetWidth;
    const turgutHeight = turgut.offsetHeight;

    // Configuration du canvas
    canvas.width = turgutWidth;
    canvas.height = turgutHeight;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    // Dessiner le carré rouge
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, turgutWidth, turgutHeight);






}

export default checkColorCollision;