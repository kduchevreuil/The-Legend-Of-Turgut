function keyboardEvent() {
    let buttonY = document.querySelector("#buttonYOfHalfJoystick");
    let buttonX = document.querySelector("#buttonXOfHalfJoystick");
    let buttonB = document.querySelector("#buttonBOfHalfJoystick");
    let buttonA = document.querySelector("#buttonAOfHalfJoystick");
    let directionOfCross = document.querySelectorAll("#directionOfCross");
    let LTLBRTRBBouttons = document.querySelectorAll("#RTLTLBRB");
    let background = document.getElementById("mapOfLand");
    let TurgutPositionX = 0;
    let TurgutPositionY = 0;
    let vitesse = 1.5;
    let turgut = document.getElementById("Turgut");
    let directionOfturgut;

    addEventListener("keydown", function (event) {

        // si la touhce "z " est pressée, on fait un mouvement vers le haut
        if (event.key === "z") {
            directionOfCross[4].style.top = "-50px";//haut
            turgut.style.backgroundImage = `url("../ImagesOfTurgut/12.png")`;
            TurgutPositionY = TurgutPositionY + vitesse;
            background.style.backgroundPositionY = TurgutPositionY + "px";

        }
        // si la touche "s" est pressée, on fait un mouvement vers le bas
        if (event.key === "s") {
            // Code pour le mouvement vers le bas
            directionOfCross[6].style.top = "140px";
            turgut.style.backgroundImage = `url("../ImagesOfTurgut/71.png")`;
            TurgutPositionY = TurgutPositionY - vitesse;
            background.style.backgroundPositionY = TurgutPositionY + "px";
        }
        // si la touche "q" est pressée, on fait un mouvement vers la gauche
        if (event.key === "q") {
            // Code pour le mouvement vers la gauche
            directionOfCross[10].style.left = "-50px";
            turgut.style.backgroundImage = `url("../ImagesOfTurgut/32.png")`;
            TurgutPositionX = TurgutPositionX + vitesse;
            background.style.backgroundPositionX = TurgutPositionX + "px";
        }
        // si la touche "d" est pressée, on fait un mouvement vers la droite
        if (event.key === "d") {
            // Code pour le mouvement vers la droite
            directionOfCross[8].style.left = "140px";
            turgut.style.backgroundImage = `url("../ImagesOfTurgut/03.png")`;
            TurgutPositionX = TurgutPositionX - vitesse;
            background.style.backgroundPositionX = TurgutPositionX + "px";
        }
        // u = x sur la mannette de jeu
        if (event.key === "u") {
            buttonX.style.transform = "scale(0.8)";
        }
        // i = y sur la mannette de jeu
        if (event.key === "i") {
            buttonY.style.transform = "scale(0.8)";
        }
        // o = RB sur la mannette de jeu
        if (event.key === "o") {
            LTLBRTRBBouttons[0].style.transform = "scale(0.8)";
        }
        // p = RT sur la mannette de jeu
        if (event.key === "p") {
            LTLBRTRBBouttons[1].style.transform = "scale(0.8)";
        }
        // j = A sur la mannette de jeu
        if (event.key === "j") {
            buttonA.style.transform = "scale(0.8)";

        }
        // k = B sur la mannette de jeu
        if (event.key === "k") {
            buttonB.style.transform = "scale(0.8)";
        }
        // l = LT sur la mannette de jeu
        if (event.key === "l") {
            LTLBRTRBBouttons[2].style.transform = "scale(0.8)";
        }
        // m = LT sur la mannette de jeu
        if (event.key === "m") {
            LTLBRTRBBouttons[3].style.transform = "scale(0.8)";
        }
    });
    addEventListener("keyup", function (event) {

        // si la touhce "z " est pressée, on fait un mouvement vers le haut
        if (event.key === "z") {
            directionOfCross[4].style.top = "46px";
        }
        // si la touche "s" est pressée, on fait un mouvement vers le bas
        if (event.key === "s") {
            // Code pour le mouvement vers le bas

            directionOfCross[6].style.top = "46px";
        }
        // si la touche "q" est pressée, on fait un mouvement vers la gauche
        if (event.key === "q") {
            // Code pour le mouvement vers la gauche
            directionOfCross[10].style.left = "46px";
        }
        // si la touche "d" est pressée, on fait un mouvement vers la droite
        if (event.key === "d") {
            // Code pour le mouvement vers la droite
            directionOfCross[8].style.left = "46px";
        }
        // u = x sur la mannette de jeu
        if (event.key === "u") {
            buttonX.style.transform = "scale(1)";
        }
        // i = y sur la mannette de jeu
        if (event.key === "i") {
            buttonY.style.transform = "scale(1)";
        }
        // o = RB sur la mannette de jeu
        if (event.key === "o") {
            LTLBRTRBBouttons[0].style.transform = "scale(1)";
        }
        // p = RT sur la mannette de jeu
        if (event.key === "p") {
            LTLBRTRBBouttons[1].style.transform = "scale(1)";
        }
        // j = A sur la mannette de jeu
        if (event.key === "j") {
            buttonA.style.transform = "scale(1)";
        }
        // k = B sur la mannette de jeu
        if (event.key === "k") {

            buttonB.style.transform = "scale(1)";
        }
        // l = LT sur la mannette de jeu
        if (event.key === "l") {
            LTLBRTRBBouttons[2].style.transform = "scale(1)";
        }
        // m = LT sur la mannette de jeu
        if (event.key === "m") {
            LTLBRTRBBouttons[3].style.transform = "scale(1)";


        }
    }
    );

}

export default keyboardEvent;