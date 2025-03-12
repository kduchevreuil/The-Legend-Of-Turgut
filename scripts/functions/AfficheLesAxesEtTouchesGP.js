function AfficheLesAxesEtTouchesGP() {
    let gp = navigator.getGamepads()[0];
    let axe1 = gp.axes[0];
    let axe2 = gp.axes[1];
    let axe3 = gp.axes[3];
    let axe4 = gp.axes[2];

    if (axe1 >= 0.7) {
        console.log("Droite");
        console.log("Axe1 :" + axe1);
    }
    if (axe1 <= -0.7) {
        console.log("Gauche");
        console.log("Axe1 :" + axe1);
    }
    if (axe2 >= 0.7) {
        console.log("Bas");
        console.log("Axe2 :" + axe2);
    }
    if (axe2 <= -0.7) {
        console.log("Haut");
        console.log("Axe2 :" + axe2);
    }
    if (axe3 >= 0.7) {
        console.log("Bas");
        console.log("Axe3 :" + axe3);
    }
    if (axe3 <= -0.7) {
        console.log("Haut");
        console.log("Axe3 :" + axe3);
    }
    if (axe4 >= 0.7) {
        console.log("Droite");
        console.log("Axe4 :" + axe4);
    }
    if (axe4 <= -0.7) {
        console.log("Gauche");
        console.log("Axe4 :" + axe4);
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
    if (gp.buttons[12].pressed) { console.log("Haut pavé"); }
    if (gp.buttons[13].pressed) { console.log("Bas pavé"); }
    if (gp.buttons[14].pressed) { console.log("Gauche pavé"); }
    if (gp.buttons[15].pressed) { console.log("Droite pavé"); }

}
export default AfficheLesAxesEtTouchesGP;