function AffichageEcranTitre() {
    // Récupération du canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    // Affichage d'une image de fond
    const image = new Image();
    image.src = "../../ImagesOfTurgut/Présentation1.png";
    // redimensionnement de l'image à la taille du canvas
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 240, 240);
    };
}
export default AffichageEcranTitre;
