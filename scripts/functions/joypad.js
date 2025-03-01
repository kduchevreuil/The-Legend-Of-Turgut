// Fonction de la manette (dans la boucle du jeu)
function Joypad() {
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
    });

    window.addEventListener("gamepaddisconnected", (e) => {
        console.log("Gamepad disconnected at index %d: %s.", e.gamepad.index, e.gamepad.id);
        gamepadConnected = false;
    });

    function update() {
        if (!gamepadConnected) return;

        let gp = navigator.getGamepads()[0];
        if (gp) {
            let axe1 = gp.axes[0];
            let axe2 = gp.axes[1];
            let axe3 = gp.axes[3];
            let axe4 = gp.axes[2];





            if (axe1 >= 0.7 || axe1 <= -0.7 || axe2 >= 0.7 || axe2 <= -0.7 || axe3 >= 0.7 || axe3 <= -0.7 || axe4 >= 0.7 || axe4 <= -0.7) {
                //console.log(axe1, axe2, axe3, axe4);
            }

            if (axe1 >= 0.7) {
                console.log("Droite");
            }
            if (axe1 <= -0.7) {
                console.log("Gauche");
            }
            if (axe2 >= 0.7) {
                console.log("Bas");
            }
            if (axe2 <= -0.7) {
                console.log("Haut");
            }
            if (axe3 >= 0.7) {
                console.log("Bas");
            }
            if (axe3 <= -0.7) {
                console.log("Haut");
            }
            if (axe4 >= 0.7) {
                console.log("Droite");
            }
            if (axe4 <= -0.7) {
                console.log("Gauche");
            }

            if (gp.buttons[0].pressed) console.log("Button A");
            if (gp.buttons[1].pressed) console.log("Button B");
            if (gp.buttons[2].pressed) console.log("Button X");
            if (gp.buttons[3].pressed) console.log("Button Y");
            if (gp.buttons[4].pressed) console.log("Button LB");
            if (gp.buttons[5].pressed) console.log("Button RB");
            if (gp.buttons[6].pressed) console.log("Button LT");
            if (gp.buttons[7].pressed) console.log("Button RT");
            if (gp.buttons[8].pressed) console.log("Select");
            if (gp.buttons[9].pressed) console.log("Start");
            if (gp.buttons[10].pressed) console.log("Push sur la direction");
            if (gp.buttons[11].pressed) console.log("Push sur l'iso");
            if (gp.buttons[12].pressed) { console.log("Haut"); }
            if (gp.buttons[13].pressed) { console.log("Bas"); }
            if (gp.buttons[14].pressed) { console.log("Gauche"); }
            if (gp.buttons[15].pressed) { console.log("Droite"); }
            if (gp.buttons[16].pressed) { console.log("Haut"); }


        }
    }

    // Boucle de mise à jour pour vérifier l'état de la manette
    function loop() {
        update();
        requestAnimationFrame(loop);
    }

    // Démarrer la boucle de mise à jour
    loop();
}

export default Joypad;