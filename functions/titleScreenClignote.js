function TitleScreenClignote() {
    const titreClignote = document.querySelector("#titreClignote");
    let isVisible = true;



    // Stocker le texte original pour le réutiliser
    const originalText = titreClignote.textContent || "appuyer sur 'START' ou 'ENTRER'";

    const blinkInterval = setInterval(() => {
        if (isVisible) {
            titreClignote.textContent = " ";
        } else {
            titreClignote.textContent = originalText;
        }
        isVisible = !isVisible;
    }, 550); // 500ms = 0.5 seconde entre chaque changement

    // Retourner la référence à l'intervalle pour pouvoir l'arrêter plus tard si besoin
    return blinkInterval;
}

export default TitleScreenClignote;