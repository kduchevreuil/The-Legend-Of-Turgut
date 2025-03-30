function TitleScreenClignote() {
    const titreClignote = document.querySelector("#titreClignote");
    let isVisible = true;
    // Stocker le texte original pour le réutiliser
    const originalText = titreClignote.textContent || "appuyer sur 'START' ou 'ENTRER'";

    const blinkInterval = setInterval(() => {
        let stopBlinking = false;
        if (isVisible && stopBlinking === false) {
            titreClignote.textContent = " ";
        } if (!isVisible && stopBlinking === false) {
            titreClignote.textContent = originalText;
        }
        if (titreClignote.style.scale === '1.2') {
            stopBlinking = true;
            titreClignote.textContent = "";
            titreClignote.style.scale === '1.2';
            // stop le clignotement après 2 secondes
            setTimeout(() => {
                titreClignote.textContent = originalText;
                titreClignote.style.scale = '1';
                blinkInterval = clearInterval(blinkInterval);
            }, 200); // 2000ms = 2 secondes
        }
        isVisible = !isVisible;
    }, 550); // 550ms = 0.55 seconde entre chaque changement

    // Retourner la référence à l'intervalle pour pouvoir l'arrêter plus tard si besoin
    return blinkInterval;
    //stopper la propagation de l'animation

}

export default TitleScreenClignote;