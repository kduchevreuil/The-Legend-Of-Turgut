function responsiveScreenGame() {
    const screenGame = document.getElementById("screenGame");
    const body = document.body;
    // supprimer le smoothing graphique du body
    body.imageSmoothingEnabled = false;

    let windowsWidthScreen = window.innerWidth;
    let windowHeightScreen = window.innerHeight;

    let scale;
    let canvasSize;

    if (windowHeightScreen < windowsWidthScreen) {
        // Si l'écran est en mode paysage (largeur plus grande que la hauteur)
        scale = windowHeightScreen / 250;
        canvasSize = 245 * scale - 25;
        screenGame.width = canvasSize;
        screenGame.height = canvasSize;
        screenGame.style.transform = `scale(${scale})`;
    } else {
        // Si l'écran est en mode portrait (hauteur plus grande que la largeur)
        scale = windowsWidthScreen / 240;
        canvasSize = 245 * scale - 25;
        screenGame.width = canvasSize;
        screenGame.height = canvasSize;
        screenGame.style.transform = `scale(${scale})`;
    }
}

export default responsiveScreenGame;
