function musicPlayTitleScreen() {
    const titleScreen = document.getElementById('titleScreen');
    const audio = document.createElement('audio');
    audio.src = './sounds/START.wav'; // Chemin vers le fichier audio 
    console.log(titleScreen.style);
    audio.loop = false; // Mettre la musique en boucle
    const Turgut = document.getElementById('Turgut');

    if (titleScreen.innerHTML) {
        window.addEventListener("gamepadconnected", (e) => {
            console.log(
                "Gamepad connected at index %d: %s. %d buttons, %d axes.",
                e.gamepad.index,
                e.gamepad.id,
                e.gamepad.buttons.length,
                e.gamepad.axes.length
            );
            setInterval(() => {
                let gp = navigator.getGamepads()[0];
                if (gp.buttons[9].pressed == true) {
                    audio.play();
                    const titleScreen = document.getElementById('titleScreen');
                    if (titleScreen) {
                        titleScreen.parentNode.removeChild(titleScreen);
                    }


                }

            }, 100); // Vérifie l'état du gamepad toutes les 100ms

            window.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    audio.play();
                    // supprimer l'élément titleScreen
                    const titleScreen = document.getElementById('titleScreen');
                    if (titleScreen) {
                        titleScreen.parentNode.removeChild(titleScreen);
                    }


                }
            });
        });
    }
}

export default musicPlayTitleScreen;


