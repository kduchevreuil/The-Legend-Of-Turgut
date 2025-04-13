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

    // Capturer les données d'image
    const imageData = ctx.getImageData(0, 0, turgutWidth, turgutHeight);
    const data = imageData.data;
    const colors = new Set(); // Utilisation d'un Set pour éviter les doublons

    // Parcourir les pixels
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Vérifier si le pixel est opaque
        if (a > 0) { // On accepte tous les pixels non transparents
            const colorHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
            colors.add(colorHex.toLowerCase());
        }
    }

    // Vérifier les collisions
    const isProhibitedColor = [...colors].some(color => prohibitedColors.includes(color));

    if (isProhibitedColor) {
        alert("Vous êtes en contact avec une couleur interdite !");
        // Ajouter ici le code pour gérer la collision
        return true; // Retourne true si collision détectée
    } else {
        console.log("Aucune couleur interdite détectée.");
        return false; // Retourne false si pas de collision
    }
}

export default checkColorCollision;