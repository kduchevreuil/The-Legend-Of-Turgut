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

  // Fonction de mise à jour des entrées de la manette
  function updateGamepad() {
    const gamepads = navigator.getGamepads();
    if (!gamepads[0]) return; // Vérifie si une manette est connectée

    const gp = gamepads[0];
    const axe1 = gp.axes[0]; // Axe horizontal
    const axe2 = gp.axes[1]; // Axe vertical

    // Gestion des axes horizontaux
    let isRed = true;
    if (axe1 >= 0.7) {
      xAxis = 1;
      setInterval(() => {
        if (isRed) {
          currentImage = turgutImages.right;
        } else {
          currentImage = turgutImagesMouv.right2;
        }
        isRed = !isRed;
      }, 1000);
      turgutImages.idle.src = "../../ImagesOfTurgut/Layer 1_sprite_07.png";
    } else if (axe1 <= -0.7) {
      xAxis = -1;
      let isleft = true;
      setInterval(() => {
        if (isleft) {
          currentImage = turgutImages.left;
        } else {
          currentImage = turgutImagesMouv.left2;
        }
        isleft = !isleft;
      }, 1000);
      turgutImages.idle.src = "../../ImagesOfTurgut/Layer 1_sprite_10.png";
    } else {
      xAxis = 0;
    }

    // Gestion des axes verticaux
    if (axe2 >= 0.7) {
      yAxis = 1;
      currentImage = turgutImages.down;
      currentImage;
      turgutImages.idle.src = "../../ImagesOfTurgut/Layer 1_sprite_16.png";
    } else if (axe2 <= -0.7) {
      yAxis = -1;
      currentImage = turgutImages.up;
      turgutImages.idle.src = "../../ImagesOfTurgut/Layer 1_sprite_04.png";
    } else {
      yAxis = 0;
    }

    // Animation du personnage
    if (xAxis !== 0 || yAxis !== 0) {
      counterWalk++;
      if (counterWalk > 3) counterWalk = 0;
    } else {
      currentImage = turgutImages.idle;
      counterWalk = 0;
    }
  }

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
    updateGamepad(); // Met à jour les inputs de la manette
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
