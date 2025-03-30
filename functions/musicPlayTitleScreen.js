function musicPlayTitleScreen() {
    const audio = new Audio('./sounds/START.wav');
    audio.loop = false;

    let gamepadInterval = null;

    // Fonction pour démarrer le jeu
    const startGame = () => {
        const titleScreen = document.getElementById('titleScreen');
        if (titleScreen) {
            titleScreen.style.opacity = '0'; // Masquer l'écran titre

            // Jouer l'audio et gérer les erreurs éventuelles
            audio.play().catch(error => console.error("Erreur de lecture audio:", error));

            setTimeout(() => {
                titleScreen.display.opacity = 0; // Supprimer l'écran titre après 500ms
            }, 500);
        }

        // Nettoyer les événements
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('gamepadconnected', handleGamepad);
        if (gamepadInterval) {
            clearInterval(gamepadInterval);
        }

        // Lancer le jeu ici (ex: appeler une fonction spécifique)
        console.log("Le jeu démarre !");
    };

    // Gestion du clavier
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            startGame();
        }
    };

    // Gestion du gamepad
    const handleGamepad = () => {
        const gp = navigator.getGamepads()[0];
        if (gp?.buttons[9]?.pressed) {
            startGame();
        }
    };

    window.addEventListener("gamepadconnected", (e) => {
        console.log(
            `Gamepad connecté : ${e.gamepad.id} (${e.gamepad.buttons.length} boutons, ${e.gamepad.axes.length} axes)`
        );

        if (!gamepadInterval) {
            gamepadInterval = setInterval(handleGamepad, 100);
        }
    });

    // Ajout de la gestion du clavier
    window.addEventListener('keydown', handleKeyDown);
}

export default musicPlayTitleScreen;
