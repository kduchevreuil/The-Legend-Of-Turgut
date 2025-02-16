function animationOfResponsiveJoystick() {
    window.addEventListener("gamepadconnected", (e) => {
        console.log(
            "Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index,
            e.gamepad.id,
            e.gamepad.buttons.length,
            e.gamepad.axes.length
        );
        setInterval(() => {
            let gp = navigator.getGamepads()[0];
            let axe1 = gp.axes[0];
            let axe2 = gp.axes[1];
            let axe3 = gp.axes[3];
            let axe4 = gp.axes[2];
            let buttonY = document.querySelector("#buttonYOfHalfJoystick");
            let buttonX = document.querySelector("#buttonXOfHalfJoystick");
            let buttonB = document.querySelector("#buttonBOfHalfJoystick");
            let buttonA = document.querySelector("#buttonAOfHalfJoystick");
            let directionOfCross = document.querySelectorAll("#directionOfCross");
            let LTLBRTRBBouttons = document.querySelectorAll("#RTLTLBRB");
            if (axe1 >= 0.7) {
                directionOfCross[5].style.left = "140px";//droite
            } else {
                directionOfCross[5].style.left = "46px";
            }
            if (axe4 >= 0.7) {
                directionOfCross[8].style.left = "140px";//droite
            } else {
                directionOfCross[8].style.left = "46px";
            }
            if (axe1 <= -0.7) {
                directionOfCross[7].style.left = "-50px";//Gauche
            } else {
                directionOfCross[7].style.left = "46px";
            }
            if (axe4 <= -0.7) {
                directionOfCross[10].style.left = "-50px";//Gauche
            } else {
                directionOfCross[10].style.left = "46px";
            }
            if (axe2 >= 0.7) {
                directionOfCross[6].style.top = "140px";//bas
            } else {
                directionOfCross[6].style.top = "46px";
            }
            if (axe3 >= 0.7) {
                directionOfCross[11].style.top = "140px";//bas
            } else {
                directionOfCross[11].style.top = "46px";
            }
            if (axe2 <= -0.7) {
                directionOfCross[4].style.top = "-50px";//haut
            } else {
                directionOfCross[4].style.top = "46px";
            }
            if (axe3 <= -0.7) {
                directionOfCross[12].style.top = "-50px";//haut
            } else {
                directionOfCross[12].style.top = "46px";
            }
            if (gp.buttons[0].pressed == true) {
                buttonA.style.transform = "scale(0.8)";
            } else {
                buttonA.style.transform = "scale(1)";
            }
            if (gp.buttons[1].pressed == true) {
                buttonB.style.transform = "scale(0.8)";
            } else {
                buttonB.style.transform = "scale(1)";
            }
            if (gp.buttons[2].pressed == true) {
                buttonX.style.transform = "scale(0.8)";
            } else {
                buttonX.style.transform = "scale(1)";
            }
            if (gp.buttons[3].pressed == true) {
                buttonY.style.transform = "scale(0.8)";
            } else {
                buttonY.style.transform = "scale(1)";
            }
            if (gp.buttons[4].pressed == true) {
                LTLBRTRBBouttons[1].style.transform = "scale(0.8)";
            } else {
                LTLBRTRBBouttons[1].style.transform = "scale(1)";
            }
            if (gp.buttons[5].pressed == true) {
                LTLBRTRBBouttons[3].style.transform = "scale(0.8)";
            } else {
                LTLBRTRBBouttons[3].style.transform = "scale(1)";
            }
            if (gp.buttons[6].pressed == true) {
                LTLBRTRBBouttons[0].style.transform = "scale(0.8)";
            } else {
                LTLBRTRBBouttons[0].style.transform = "scale(1)";
            }
            if (gp.buttons[7].pressed == true) {
                LTLBRTRBBouttons[2].style.transform = "scale(0.8)";
            } else {
                LTLBRTRBBouttons[2].style.transform = "scale(1)";
            }
            if (gp.buttons[8].pressed == true) {
                console.log("Select");
            }
            if (gp.buttons[9].pressed == true) {
                console.log("Start");
            }
            if (gp.buttons[10].pressed == true) {
                console.log("Push sur la direction");
            }
            if (gp.buttons[11].pressed == true) {
                console.log("Push sur l'iso");
            }
            if (gp.buttons[12].pressed == true) {
                directionOfCross[0].style.top = "-50px";//haut
            } else {
                directionOfCross[0].style.top = "46px";
            }
            if (gp.buttons[13].pressed == true) {
                directionOfCross[1].style.top = "140px";//bas
            } else {
                directionOfCross[1].style.top = "46px";
            }
            if (gp.buttons[14].pressed == true) {
                directionOfCross[2].style.left = "-50px";//Gauche
            } else {
                directionOfCross[2].style.left = "46px";
            }
            if (gp.buttons[15].pressed == true) {
                directionOfCross[3].style.left = "140px";//droit
            } else {
                directionOfCross[3].style.left = "46px";
            }
        }, 100);


    });

}

export default animationOfResponsiveJoystick;