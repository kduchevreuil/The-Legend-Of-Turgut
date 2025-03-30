function responsiveJoystick() {
    const body = document.querySelector('body');
    const screenWidth = body.clientWidth;
    const screenHeight = body.clientHeight;
    const halfJoysticks = document.querySelectorAll('#halfJoystick'); // Changé pour une classe 

    // Vérification 
    const shouldHideJoysticks = screenWidth < 1555 || screenHeight < 695;
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

}

export default responsiveJoystick;



