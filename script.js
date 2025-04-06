import responsiveScreenGame from "./functions/responsiveScreenGame.js";
import titleScreenClignote from "./functions/titleScreenClignote.js";
import musicPlayTitleScreen from "./functions/musicPlayTitleScreen.js";
import animationOfResponsiveJoystick from "./functions/animationOfResponsiveJoystick.js";
import responsiveJoystick from "./functions/responsiveJoystick.js";

// Appel de la fonction responsiveScreenGame pour ajuster la taille de l'écran de jeu
responsiveScreenGame();
// Appel de la fonction responsiveScreenGame lors du redimensionnement de la fenêtre
window.addEventListener("resize", responsiveScreenGame);
// Appel de la fonction TitleScreenClignote pour faire clignoter l'écran titre
titleScreenClignote();
// Appel de la fonction musicPlayTitleScreen pour jouer la musique de l'écran titre
musicPlayTitleScreen();
// Appel de la fonction animationOfResponsiveJoystick pour animer le joystick
animationOfResponsiveJoystick();
// Appel de la fonction responsiveJoystick pour gérer le joystick
responsiveJoystick();
// Appel de la fonction responsiveJoystick lors du redimensionnement de la fenêtre
window.addEventListener("resize", responsiveJoystick);
// Appel de la fonction halfJoystikPlace pour placer le joystick
