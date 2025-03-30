function musicPlayTitleScreen() {
    const audio = new Audio('./sounds/START.wav');
    audio.loop = false;
    const audio2 = new Audio('./sounds/STARTPIXEL.wav');

    let gamepadInterval = null;

    // Fonction pour démarrer le jeu
    const startGame = () => {
        const titleScreen = document.getElementById('titleScreen');
        const HistoryScreen = document.getElementById('HistoryScreen');
        if (titleScreen) {
            const titreClignote = document.getElementById('titreClignote');
            titreClignote.style.scale = '1.2';
            titreClignote.style.color = "yellow";
            audio2.play(); // Jouer le son de démarrage
            // Jouer l'audio et gérer les erreurs éventuelles
            audio.play().catch(error => console.error("Erreur de lecture audio:", error));
            setTimeout(() => {
                let i = 0;
                const fadeOut = setInterval(() => {
                    if (i < 1) {
                        // arreter la fonction TitleScreenClignote
                        titreClignote.style.scale = '1';
                        titleScreen.style.opacity = `${1 - i}`;
                        HistoryScreen.style.opacity = `${0 + i}`; // Appliquer l'opacité à l'écran d'histoire
                        i += 0.01; // Ajuster la vitesse de fondu
                    } else {
                        clearInterval(fadeOut);
                    }
                    if (i >= 1) {
                        titleScreen.style.zIndex = "-5"; // Masquer l'écran titre
                        titleScreen.style.opacity = "0"; // Réinitialiser l'opacité pour la prochaine fois
                        HistoryScreen.style.opacity = "0"; // Réinitialiser l'opacité pour la prochaine fois
                    }
                }, 50); // Ajuster la vitesse de fondu

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
