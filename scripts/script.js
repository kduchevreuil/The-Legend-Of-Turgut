<<<<<<< HEAD
import Joypad from "./functions/joypad.js";
=======

import joypad from "./functions/joypad.js";
>>>>>>> d7fd6810f98997418001425fc53f907433f69847
import responsiveCanvas from "./functions/responsiveCanvas.js";
import drawGame from "./functions/drawGame.js";
import animationOfResponsiveJoystick from "./functions/animationOfResponsiveJoystick.js";

const prohibitedColors = ["#3d34a5", "#aE6c37"];
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
let fps = 1;
// Déplacement de Robin
const body = document.querySelector("body");
// redimensionnement du canvas
window.addEventListener("resize", draw);
// Fonction d'affichage du jeu
function draw() {
<<<<<<< HEAD
  // Fonction qui n'ont pas besoin d'être redessinées
  responsiveCanvas();
  animationOfResponsiveJoystick();
  //responsiveJoystick();
  // Fonction qui ont besoin d'être redessinées
  setTimeout(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGame();
    Joypad();
    //animationOfResponsiveJoystick();
  }, 1000 / fps);
=======
    // Fonction qui n'ont pas besoin d'être redessinées
    responsiveCanvas();
    animationOfResponsiveJoystick();
    //responsiveJoystick();
    // Fonction qui ont besoin d'être redessinées
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGame();
        joypad();
        //animationOfResponsiveJoystick();
    }, 1000 / fps);

>>>>>>> d7fd6810f98997418001425fc53f907433f69847
}
draw();
