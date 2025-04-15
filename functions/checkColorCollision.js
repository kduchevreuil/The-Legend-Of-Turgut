function checkColorCollision() {
    const prohibitedColors = ["#6ab417", "#ae6c37", "#211640"];
    const turgut = document.getElementById("Turgut");
    const mapOfLand = document.getElementById("mapOfLand");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const positionInitialX = 118;
    const positionInitialY = 118;
    const sampleWidth = 16;
    const sampleHeight = 16;

    // Obtenir la position du background
    const computedStyle = window.getComputedStyle(mapOfLand);
    const backgroundX = parseInt(computedStyle.backgroundPositionX, 10) || 0;
    const backgroundY = parseInt(computedStyle.backgroundPositionY, 10) || 0;

    // Extraire l'URL de l'image du background
    const backgroundImageURL = computedStyle.backgroundImage.slice(5, -2); // enlève url("...")

    // Créer une image à partir de l'URL du background
    const bgImage = new Image();
    bgImage.src = backgroundImageURL;

    bgImage.onload = () => {
        // Créer un canvas temporaire pour échantillonner une zone de l’image
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = sampleWidth;
        tempCanvas.height = sampleHeight;
        const tempCtx = tempCanvas.getContext("2d");

        // Dessiner une portion de l’image sur le canvas temporaire
        tempCtx.drawImage(
            bgImage,
            positionInitialX + backgroundX,
            positionInitialY + backgroundY,
            sampleWidth,
            sampleHeight,
            0,
            0,
            sampleWidth,
            sampleHeight
        );

        // Récupérer les données de pixels
        const imageData = tempCtx.getImageData(0, 0, sampleWidth, sampleHeight).data;

        // Vérifier s'il y a collision avec une couleur interdite
        for (let i = 0; i < imageData.length; i += 4) {
            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];
            const hexColor = rgbToHex(r, g, b);
            if (prohibitedColors.includes(hexColor)) {
                console.log("Collision détectée avec la couleur :", hexColor);
                return true;
            }
        }

        console.log("Pas de collision détectée.");
        return false;
    };
}

// Convertit les valeurs RGB en code hexadécimal
function rgbToHex(r, g, b) {
    return (
        "#" +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    );
}




export default checkColorCollision;