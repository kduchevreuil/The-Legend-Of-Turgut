function responsiveJoystick() {
    const body = document.querySelector('body');
    const screenWidth = body.clientWidth;
    const screenHeight = body.clientHeight;
    const halfJoysticks = document.querySelectorAll('#halfJoystick'); // Changé pour une classe 

    // Vérification 
    const shouldHideJoysticks = screenWidth < 1555 || screenHeight < 730;
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



