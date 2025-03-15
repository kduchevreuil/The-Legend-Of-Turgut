function drawGame() {
  // Configuration du canvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  // Chargement des images
  const mapImage = new Image();
  mapImage.src = "./imageOfMap/map.png";

  const turgutImages = {
    right: new Image(),
    left: new Image(),
    up: new Image(),
    down: new Image(),
    idle: new Image(),
  };

  const turgutImagesMouv = {
    right2: new Image(),
    left2: new Image(),
    up2: new Image(),
    down2: new Image(),
  };
  turgutImages.right.src = "../../ImagesOfTurgut/Layer 1_sprite_08.png";
  turgutImages.left.src = "../../ImagesOfTurgut/Layer 1_sprite_11.png";
  turgutImages.up.src = "../../ImagesOfTurgut/Layer 1_sprite_17.png";
  turgutImages.down.src = "../../ImagesOfTurgut/Layer 1_sprite_14.png";
  turgutImages.idle.src = "../../ImagesOfTurgut/Layer 1_sprite_02.png";

  turgutImagesMouv.right2.src = "../../ImagesOfTurgut/Layer 1_sprite_07.png";
  turgutImagesMouv.left2.src = "../../ImagesOfTurgut/Layer 1_sprite_10.png";
  turgutImagesMouv.up2.src = "../../ImagesOfTurgut/Layer 1_sprite_16.png";
  turgutImagesMouv.down2.src = "../../ImagesOfTurgut/Layer 1_sprite_15.png";

  let turgutX = 120;
  let turgutY = 110;
  const turgutWidth = 16;
  const turgutHeight = 16;
  const turgutSpeed = 1;
  let counterWalk = 0;
  let currentImage = turgutImages.idle;
  let xAxis = 0;
  let yAxis = 0;

  // Fonction appelée par la boucle principale
  function updatePosition() {
    turgutX += xAxis * turgutSpeed;
    turgutY += yAxis * turgutSpeed;
  }

  const gamepads = navigator.getGamepads();
  if (!gamepads[0]) return; // Vérifie si une manette est connecté

  const gp = gamepads[0];
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

  // Afficher en console les boutons pressés et les directions >= 0.7
  let directionActuelle = "vide";
  // vérifier l'état des axes toutes les 100ms

  let infoAxe1 = axe1;
  let infoAxe2 = axe2;
  let infoAxe3 = axe3;
  let infoAxe4 = axe4;
  setInterval(() => {
    // Axe 1 (droite)
    if (infoAxe1 >= 0.2 && directionActuelle != "droite") {
      directionActuelle = "droite";
      infoAxe1 = 1;
      console.log("axe1 (droite) est activé");
      console.log("axe1", axe1);
      console.log("directionActuelle", directionActuelle);
    }
    if (axe1 > 0 && infoAxe1 < 0.1) {
      console.log("axe1 (droite) est désactivé");
      console.log("axe1", axe1);
      console.log("directionActuelle", directionActuelle);
      infoAxe1 = 0;
      directionActuelle = "vide";
    }
  }, 100);

  // Fonction de dessin
  function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mapImage, 0, 0, mapImage.width, mapImage.height);
    ctx.drawImage(currentImage, turgutX, turgutY, turgutWidth, turgutHeight);
  }

  // Événement de connexion de la manette
  window.addEventListener("gamepadconnected", () => {
    console.log("Manette connectée !");
  });

  // Fonction principale appelée dans la boucle
  function gameLoop() {
    updatePosition(); // Applique les mouvements
    drawImage(); // Dessine l'image

    requestAnimationFrame(gameLoop);
  }

  // Démarrer la boucle du jeu une fois que l'image de la carte est chargée
  mapImage.onload = () => {
    gameLoop();
  };
}

export default drawGame;
