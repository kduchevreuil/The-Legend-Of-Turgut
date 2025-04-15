function checkColorCollision() {
    const prohibitedColors = ["#6ab417", "#ae6c37", "#211640"];

    const turgut = document.getElementById("Turgut");
    const mapOfLand = document.getElementById("mapOfLand");
    const canvas = document.getElementById("canvas");

    if (!turgut || !mapOfLand || !canvas) {
        console.error("Un ou plusieurs éléments nécessaires sont introuvables");
        return;
    }

    const ctx = canvas.getContext("2d");
    const computedStyle = window.getComputedStyle(mapOfLand);
    const backgroundImage = computedStyle.backgroundImage;

    // Extraire l'URL de l'image de fond (format: url("..."))
    const match = backgroundImage.match(/url\("?(.+?)"?\)/);
    if (!match) {
        console.error("Image de fond introuvable");
        return;
    }

    const imageUrl = match[1];
    const image = new Image();
    image.crossOrigin = "anonymous"; // Si image externe

    image.onload = function () {
        const turgutRect = turgut.getBoundingClientRect();
        const mapRect = mapOfLand.getBoundingClientRect();

        const turgutX = turgutRect.left - mapRect.left;
        const turgutY = turgutRect.top - mapRect.top;
        const turgutWidth = turgut.offsetWidth;
        const turgutHeight = turgut.offsetHeight;

        // Ajuster le canvas pour correspondre à la taille de `Turgut`
        canvas.width = turgutWidth;
        canvas.height = turgutHeight;

        // Dessiner uniquement la portion de l’image de fond correspondant à `Turgut`
        ctx.drawImage(image, turgutX, turgutY, turgutWidth, turgutHeight, 0, 0, turgutWidth, turgutHeight);

        // Lire les couleurs à cette position
        const imageData = ctx.getImageData(0, 0, turgutWidth, turgutHeight);
        const data = imageData.data;
        const colorsInContact = new Set();

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];

            if (a > 0) {
                const colorHex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
                    .toString(16)
                    .slice(1)}`;
                colorsInContact.add(colorHex.toLowerCase());
            }
        }

        const collisionDetected = [...colorsInContact].some(color => prohibitedColors.includes(color));
        console.log(collisionDetected ? "Collision détectée avec une couleur interdite" : "Pas de collision détectée");
    };

    image.onerror = function () {
        console.error("Erreur lors du chargement de l'image");
    };

    image.src = imageUrl;
}



export default checkColorCollision;