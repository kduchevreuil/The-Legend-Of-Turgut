function keyboardEvent() {
    addEventListener("keydown", function (event) {

        // si la touhce "z " est pressée, on fait un mouvement vers le haut
        if (event.key === "z") {
            // Code pour le mouvement vers le haut
            console.log("Mouvement vers le haut");
        }
        if (event.key === "ArrowUp") {
            // Code pour le mouvement vers le haut
            console.log("Mouvement vers le haut");
        } else if (event.key === "ArrowDown") {
            // Code pour le mouvement vers le bas
            console.log("Mouvement vers le bas");
        } else if (event.key === "ArrowLeft") {
            // Code pour le mouvement vers la gauche
            console.log("Mouvement vers la gauche");
        } else if (event.key === "ArrowRight") {
            // Code pour le mouvement vers la droite
            console.log("Mouvement vers la droite");
        }
    }
    );

}

export default keyboardEvent;