function checkColorCollision() {
    // Liste des couleurs interdites (en hexadécimal minuscule)
    const prohibitedColors = ["#6ab417", "#ae6c37", "#211640"].map(c => c.toLowerCase());

    const turgut = document.getElementById("Turgut");
    const mapOfLand = document.getElementById("mapOfLand");
    // mettre le background de mapOfLand dans une variable
    const background = window.getComputedStyle(mapOfLand).backgroundImage;

    const turgutPosition = turgut.getBoundingClientRect();
    const backgroundPosition = mapOfLand.getBoundingClientRect();

    const turgutX = turgutPosition.left - backgroundPosition.left;
    const turgutY = turgutPosition.top - backgroundPosition.top;
    const turgutWidth = turgut.offsetWidth;
    const turgutHeight = turgut.offsetHeight;
    const canvas = document.getElementById("canvas");
    // Création d'un canvas temporaire
    canvas.width = turgutWidth;
    canvas.height = turgutHeight;
    const ctx = canvas.getContext("2d");

    // dessiner le canvas en carré rouge de 16 px sur 16 px
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 16, 16);
    // vérifier si ce carré rouge est en contact avec une couleur interdite
    //getImageData are faster with the willReadFrequently attribute set to true.

    // si le carré rouge est en contact avec une couleur interdite, dans un des éléments de la window
    // vérifer les couleurs des éléments sous le carré rouge
    const imageData = ctx.getImageData(0, 0, turgutWidth, turgutHeight);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const colors = [];
    // Parcourir les pixels du carré rouge
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Vérifier si le pixel est opaque
        if (a === 255) {
            // Convertir la couleur en hexadécimal
            const colorHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
            colors.push(colorHex);
        }
    }
    // Vérifier si une des couleurs du tableau est dans la liste des couleurs interdites
    const isProhibitedColor = colors.some(color => prohibitedColors.includes(color.toLowerCase()));
    // Si une couleur interdite est trouvée, afficher une alerte
    if (isProhibitedColor) {
        alert("Vous êtes en contact avec une couleur interdite !");
        // Vous pouvez également ajouter ici le code pour gérer la collision
        // par exemple, faire reculer Turgut ou changer sa couleur
    } else {
        console.log("Aucune couleur interdite détectée.");
    }
}

export default checkColorCollision;