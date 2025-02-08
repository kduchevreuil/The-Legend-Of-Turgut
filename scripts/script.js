import testconsoleLog from "./functions/testconsoleLog.js";

//fonction de base à lancé au chargement de la page
function init() {
    console.log("init");
    testconsoleLog("Hello, World! Init");
    // fonctions a répeter à la vitesse de 60fps
    setInterval(function () {
        console.log("loop");
    }, 1000 / 30);

}

init();