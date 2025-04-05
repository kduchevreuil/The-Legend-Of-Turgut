function musicPlayTitleScreen() {
    const audio = new Audio('./sounds/START.wav');
    audio.loop = false;
    const audio2 = new Audio('./sounds/STARTPIXEL.wav');
    const mapOfLand = document.getElementById('mapOfLand');
    let gamepadInterval = null;
    const audio3 = new Audio('./sounds/TEXTPIXEL.wav');
    audio3.loop = false;

    // Fonction pour démarrer le jeu
    const startGame = () => {
        const titleScreen = document.getElementById('titleScreen');
        const historyScreen = document.getElementById('historyScreen');
        let afficheTexte = false;
        if (titleScreen) {
            const titreClignote = document.getElementById('titreClignote');
            titreClignote.style.color = "yellow";
            audio2.play(); // Jouer le son de démarrage
            // Jouer l'audio et gérer les erreurs éventuelles
            audio.play().catch(error => console.error("Erreur de lecture audio:", error));
            setTimeout(() => {
                let i = 0;
                let y = 0;
                const fadeOut = setInterval(() => {
                    if (i < 1) {
                        // arreter la fonction TitleScreenClignote
                        titreClignote.style.scale = '1';
                        titleScreen.style.opacity = `${1 - i}`;
                        historyScreen.style.opacity = `${0 + i}`; // Appliquer l'opacité à l'écran d'histoire
                        i += 0.01; // Ajuster la vitesse de fondu

                    } else {
                        clearInterval(fadeOut);
                        let historyScreen = document.getElementById('historyScreen');
                        historyScreen.style.position = 'absolute';
                        historyScreen.style.top = '0';
                        historyScreen.style.left = '0';
                        historyScreen.style.padding = '7px';
                        historyScreen.style.margin = '157px 5px 5px 5px';
                        historyScreen.style.fontSize = '10px';
                        historyScreen.style.textAlign = 'center';
                        historyScreen.style.opacity = `${0 + i}`; // Appliquer l'opacité à l'écran d'histoire
                        historyScreen.style.backgroundColor = 'brown';
                        historyScreen.style.zIndex = '200';
                        historyScreen.style.fontSize = '6px';
                        historyScreen.style.border = '#ffffff 2px solid';
                        historyScreen.style.width = '226px';
                        historyScreen.style.height = '74px';
                        // Mettre le texte dans un tableau lettre par lettre avec les espaces
                        let text = historyScreen.innerHTML;
                        text = text.split('').map((letter, index) => {
                            if (letter === ' ') {
                                return `<span style="opacity: 0;">${letter}</span>`;
                            } else {
                                return `<span style="opacity: 0;">${letter}</span>`;
                            }
                        }).join('');
                        historyScreen.innerHTML = text;
                        const lettres = document.querySelectorAll('#historyScreen span');
                        const interval = setInterval(() => {
                            if (y < lettres.length) {
                                lettres[y].style.opacity = '1';

                                lettres[y].style.color = 'white';
                                y++;
                                if (lettres[y - 1].textContent !== ' ') {
                                    audio3.play(); // Jouer le son de démarrage
                                }
                                if (y >= lettres.length) {
                                    //supprimer le historyScreen
                                    setTimeout(() => {
                                        historyScreen.style.opacity = '0'; // Appliquer l'opacité à l'écran d'histoire
                                        // s'efface en 2 secondes
                                        historyScreen.style.transition = 'opacity 2s ease-out';
                                        historyScreen.style.zIndex = '-1'; // Mettre l'écran d'histoire derrière le titre
                                    }, 3000); // Attendre 1 seconde avant de supprimer l'écran d'histoire
                                }

                            } else {
                                clearInterval(interval);
                            }


                        }, 50); // Ajuster la vitesse d'apparition des lettres



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
