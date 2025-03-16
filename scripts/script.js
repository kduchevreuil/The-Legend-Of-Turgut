import joypad from "./functions/joypad.js";
import responsiveCanvas from "./functions/responsiveCanvas.js";
import drawGame from "./functions/drawGame.js";
import animationOfResponsiveJoystick from "./functions/animationOfResponsiveJoystick.js";
import AfficheLesAxesEtTouchesGP from "./functions/AfficheLesAxesEtTouchesGP.js";
import AffichageEcranTitre from "./functions/affichageEcranTitre.js";
import responsiveJoystick from "./functions/responsiveJoystick.js";
import cameraOnTurgut from "./functions/cameraOnTurgut.js";
import checkColorCollision from "./functions/checkColorCollision.js";

const prohibitedColors = ["#3d34a5", "#aE6c37"];
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
let fps = 15;
// Déplacement de Robin
const body = document.querySelector("body");
// redimensionnement du canvas
window.addEventListener("resize", draw);
window.addEventListener("orientationchange", draw);
window.addEventListener("resize", responsiveJoystick);
// Fonction d'affichage du jeu
function draw() {
  // Fonction qui n'ont pas besoin d'être redessinées

  responsiveCanvas();
  animationOfResponsiveJoystick();
  //responsiveJoystick();
  AffichageEcranTitre();
  // Fonction qui ont besoin d'être redessinées
  setInterval(function () {
    //cameraOnTurgut();
    joypad();
    AfficheLesAxesEtTouchesGP();
    drawGame();
    checkColorCollision();
    //animationOfResponsiveJoystick();

  }, 1000 / fps);
}
draw();
