// Fonction de la manette (dans la boucle du jeu)
function joypad() {
    let gamepadConnected = false;

    window.addEventListener("gamepadconnected", (e) => {
        console.log(
            "Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index,
            e.gamepad.id,
            e.gamepad.buttons.length,
            e.gamepad.axes.length
        );
        gamepadConnected = true;
        let gp = navigator.getGamepads()[0];

    });

    window.addEventListener("gamepaddisconnected", (e) => {
        console.log("Gamepad disconnected at index %d: %s.", e.gamepad.index, e.gamepad.id);
        gamepadConnected = false;

    });

    // Arrêter la fonction si aucune manette n'est connectée
    if (!gamepadConnected) return;
    // Afficher les informations de la manette en console


    //Afficher les informations sur les axes en consoles : 
    // Axe 0 : Horizontal gauche
    // Axe 1 : Vertical gauche
    // Axe 2 : Horizontal droit
    // Axe 3 : Vertical droit

    // Boucle de mise à jour pour vérifier l'état de la manette




}

// Exporter la fonction


export default joypad;