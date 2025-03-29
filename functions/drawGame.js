let turgutX = 112;
let turgutY = 108;
const turgutWidth = 16;
const turgutHeight = 16;
let counterWalk = 0;
let currentImage;
// position de mapImage
let mapImageX = -360;
let mapImageY = -220;
function drawGame() {
  // Configuration du canvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  // Chargement des images
  const mapImage = new Image();
  mapImage.src = "./imageOfMap/map.png";
  // découpe de l'image de turgutComplete

  // Chargement des images de Turğut

  //turgut image deplacement

  const turgutImages = {
    right: new Image(),
    left: new Image(),
    up: new Image(),
    down: new Image(),
    idle: new Image(),
    right2: new Image(),
    left2: new Image(),
    up2: new Image(),
    down2: new Image(),
    rightStay: new Image(),
    leftStay: new Image(),
    upStay: new Image(),
    downStay: new Image(),
  };

  //turgut image qui attaque

  const turgutImagesAttaque = {
    rightAtt: new Image(),
    leftAtt: new Image(),
    downAtt: new Image(),
    upAtt: new Image(),
  };

  turgutImages.right.src = "../../ImagesOfTurgut/70.png";
  turgutImages.left.src = "../../ImagesOfTurgut/11.png";
  turgutImages.up.src = "../../ImagesOfTurgut/30.png";
  turgutImages.down.src = "../../ImagesOfTurgut/00.png";
  turgutImages.idle.src = "";

  turgutImages.right2.src = "../../ImagesOfTurgut/01.png";
  turgutImages.left2.src = "../../ImagesOfTurgut/21.png";
  turgutImages.up2.src = "../../ImagesOfTurgut/40.png";
  turgutImages.down2.src = "../../ImagesOfTurgut/10.png";

  const gp = navigator.getGamepads()[0];
  const axe1 = gp.axes[0]; // Axe horizontal
  const axe2 = gp.axes[1]; // Axe vertical
  const axe3 = gp.axes[3]; // Axe horizontal droit
  const axe4 = gp.axes[2]; // Axe vertical droi
  const buttonA = gp.buttons[0].pressed;
  const buttonB = gp.buttons[1].pressed;
  const buttonX = gp.buttons[2].pressed;
  const buttonY = gp.buttons[3].pressed;
  const buttonLB = gp.buttons[4].pressed;
  const buttonRB = gp.buttons[5].pressed;
  const buttonLT = gp.buttons[6].pressed;
  const buttonRT = gp.buttons[7].pressed;
  const buttonSelect = gp.buttons[8].pressed;
  const buttonStart = gp.buttons[9].pressed;
  const buttonPushDirection = gp.buttons[10].pressed;
  const buttonPushIso = gp.buttons[11].pressed;
  const buttonHautPave = gp.buttons[12].pressed;
  const buttonBasPave = gp.buttons[13].pressed;
  const buttonGauchePave = gp.buttons[14].pressed;
  const buttonDroitePave = gp.buttons[15].pressed;
  // Fonction appelée par la boucle principale
  const gamepads = navigator.getGamepads();
  if (!gamepads[0]) return; // Vérifie si une manette est connecté

  // Afficher en console les boutons pressés et les directions >= 0.7
  let directionActuelle = "vide";
  // vérifier l'état des axes toutes les 100ms

  let infoAxe1 = axe1;
  let infoAxe2 = axe2;
  let infoAxe3 = axe3;
  let infoAxe4 = axe4;

  // Vérification des axes
  infoAxe1 = axe1;
  infoAxe2 = axe2;
  infoAxe3 = axe3;
  infoAxe4 = axe4;
  // Gestion des axes avec priorités pour éviter conflits
  if (infoAxe1 >= 0.3 && directionActuelle !== "droite") {
    counterWalk++;
    directionActuelle = "droite";
    infoAxe1 = axe1;
    infoAxe2 = 0;
    infoAxe3 = 0;
    infoAxe4 = 0;
    console.log("axe1 (droite) est activé");
  }
  if (infoAxe1 <= -0.3 && directionActuelle !== "gauche") {
    counterWalk++;
    directionActuelle = "gauche";
    infoAxe1 = axe1;
    infoAxe2 = 0;
    infoAxe3 = 0;
    infoAxe4 = 0;
    console.log("axe1 (gauche) est activé");
  }
  if (infoAxe2 >= 0.3 && directionActuelle !== "bas") {
    counterWalk++;
    directionActuelle = "bas";
    infoAxe1 = 0;
    infoAxe2 = axe2;
    infoAxe3 = 0;
    infoAxe4 = 0;
    console.log("axe2 (bas) est activé");
  }
  if (infoAxe2 <= -0.3 && directionActuelle !== "haut") {
    counterWalk++;
    directionActuelle = "haut";
    infoAxe1 = 0;
    infoAxe2 = axe2;
    infoAxe3 = 0;
    infoAxe4 = 0;
    console.log("axe2 (haut) est activé");
  }

  if (directionActuelle == "droite") {
    // alternance des images pour l'animation
    if (counterWalk % 2 == 0) {
      currentImage = turgutImages.right;
      console.log("droite");
      mapImageX = mapImageX - 3;
    } else {
      currentImage = turgutImages.right2;
      console.log("droite2");
      mapImageX = mapImageX - 3;
    }
  }
  if (directionActuelle == "gauche") {
    // alternance des images pour l'animation
    if (counterWalk % 2 == 0) {
      currentImage = turgutImages.left;
      console.log("gauche");
      mapImageX = mapImageX + 3;
    } else {
      currentImage = turgutImages.left2;
      console.log("gauche2");
      mapImageX = mapImageX + 3;
    }
  }

  if (directionActuelle == "bas") {
    // alternance des images pour l'animation
    if (counterWalk % 2 == 0) {
      currentImage = turgutImages.down;
      console.log("bas");
      mapImageY = mapImageY - 3;
    } else {
      currentImage = turgutImages.down2;
      console.log("bas2");
      mapImageY = mapImageY - 3;
    }
  }

  if (directionActuelle == "haut") {
    // alternance des images pour l'animation
    if (counterWalk % 2 == 0) {
      currentImage = turgutImages.up;
      console.log("haut");
      mapImageY = mapImageY + 3;
    } else {
      currentImage = turgutImages.up2;
      console.log("haut2");
      mapImageY = mapImageY + 3;
    }
  }

  // Fonction de dessin
  function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mapImage, mapImageX, mapImageY, mapImage.width, mapImage.height);
    ctx.drawImage(currentImage, turgutX, turgutY, turgutWidth, turgutHeight);
  }

  // Événement de connexion de la manette
  window.addEventListener("gamepadconnected", () => {
    console.log("Manette connectée !");
  });

  // Fonction principale appelée dans la boucle
  function gameLoop() {
    // Applique les mouvements
    drawImage(); // Dessine l'image
    requestAnimationFrame(gameLoop);
  }
  //Centrer Turğut à a la position du canvas

  // Démarrer la boucle du jeu une fois que l'image de la carte est chargée
  mapImage.onload = () => {
    gameLoop();
  };
}

export default drawGame;
