function responsiveJoystick() {
    const body = document.querySelector('body');

    const halfJoysticks = document.querySelectorAll('#halfJoystick'); // Changé pour une classe 
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    // Sélectionner les deux demi-joysticks avec une classe

    // Joystick gauche
    halfJoysticks[0].style.position = 'absolute';
    halfJoysticks[0].style.top = '0px';
    halfJoysticks[0].style.left = '0px';
    halfJoysticks[0].style.width = '300px';
    halfJoysticks[0].style.height = screenHeight + 'px';
    halfJoysticks[0].style.display = 'flex';

    // Joystick droit
    halfJoysticks[1].style.position = 'absolute';
    halfJoysticks[1].style.top = '0px';
    halfJoysticks[1].style.left = (screenWidth - 300) + 'px'; // 300 étant la largeur du joystick
    halfJoysticks[1].style.width = '300px';
    halfJoysticks[1].style.height = screenHeight + 'px';
    halfJoysticks[1].style.display = 'flex';
    // Vérification de la taille de l'écran
    const shouldHideJoysticks = screenWidth < 1570 || screenHeight < 720 || screenHeight > 1385;
    if (shouldHideJoysticks) {
        halfJoysticks.forEach(joystick => {
            joystick.style.display = 'none';
        });
    }
    else {
        halfJoysticks.forEach(joystick => {
            joystick.style.display = 'flex';
        });
    }
    // vérifier si l'utilisateur est sur mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
        halfJoysticks.forEach(joystick => {
            joystick.style.display = 'none';
        });
    }


}

export default responsiveJoystick;



