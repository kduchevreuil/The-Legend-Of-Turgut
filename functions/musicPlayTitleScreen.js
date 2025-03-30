function musicPlayTitleScreen() {
    const titleScreen = document.getElementById('titleScreen');
    const audio = document.createElement('audio');
    audio.src = './sounds/START.wav'; // Chemin vers le fichier audio 

    audio.loop = false; // Mettre la musique en boucle

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            audio.play();
            titleScreen.style.opacity = '0'; // Fait disparaître l'écran titre
        }
    });
};
export default musicPlayTitleScreen;


