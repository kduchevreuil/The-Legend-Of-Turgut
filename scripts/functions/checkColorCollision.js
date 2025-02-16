// Fonction pour vérifier la collision de couleur
function checkColorCollision() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const turgutImageData = ctx.getImageData(turgutX, turgutY, turgutWidth, turgutHeight);
    const turgutPixels = turgutImageData.data;

    for (let i = 0; i < turgutPixels.length; i += 4) {
        const pixelColor = `#${turgutPixels[i].toString(16).padStart(2, '0')}${turgutPixels[i + 1].toString(16).padStart(2, '0')}${turgutPixels[i + 2].toString(16).padStart(2, '0')}`;
        if (prohibitedColors.includes(pixelColor)) {
            console.log(`Collision avec la couleur : ${pixelColor}`);
            break;
        }
    }
}

export default checkColorCollision;