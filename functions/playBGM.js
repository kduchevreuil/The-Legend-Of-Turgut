function playBGM(source) {
    // Create a new Audio object
    let sound = new Audio();
    sound.src = source;
    sound.loop = true;
    sound.volume = 0.2;
    sound.play();
    return sound;
}