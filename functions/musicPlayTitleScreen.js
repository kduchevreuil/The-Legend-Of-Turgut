function musicPlayTitleScreen() {
    const titleScreen = document.getElementById('titleScreen');
    const audio = document.createElement('audio');
    audio.src = '../sounds/START.ogg'; // Chemin vers le fichier audio
    audio.loop = false; // Mettre la musique en boucle

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            audio.play(); // Joue le son lorsque la touche "Entrée" ou "Espace" est pressée
            titleScreen.style.opacity = '0'; // Fait disparaître l'écran titre
            console.log(titleScreen.style.opacity);
        }
    });
};
export default musicPlayTitleScreen;


