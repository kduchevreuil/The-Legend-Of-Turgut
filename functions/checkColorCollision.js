function checkColorCollision() {
    // Liste des couleurs interdites (en hexadécimal minuscule)
    const prohibitedColors = ["#6ab417", "#ae6c37", "#211640"].map(c => c.toLowerCase());

    const turgut = document.getElementById("Turgut");
    const background = document.getElementById("mapOfLand");

    const turgutPosition = turgut.getBoundingClientRect();
    const backgroundPosition = background.getBoundingClientRect();

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
    // afficher les couleurs avec lesquelles le canvas est un contact






}







export default checkColorCollision;