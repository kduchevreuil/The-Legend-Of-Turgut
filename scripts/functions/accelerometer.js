// Fonction du accelerometre

let acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
    console.log(`Acceleration along the X-axis ${acl.x}`);
    console.log(`Acceleration along the Y-axis ${acl.y}`);
    console.log(`Acceleration along the Z-axis ${acl.z}`);
    let gyroX = document.getElementById("gyroX");
    let gyroY = document.getElementById("gyroY");
    let gyroZ = document.getElementById("gyroZ");
    gyroX.textContent = `X : ${Math.round(acl.x)}`;
    gyroY.textContent = `Y : ${Math.round(acl.y)}`;
    gyroZ.textContent = `Z : ${Math.round(acl.z)}`;
    if (acl.x >= -2) {
        rightPressed = true;
        lastButtonPressed = "right";
    }
    if (acl.x >= 2) {
        leftPressed = true;
        lastButtonPressed = "left";
    }
    if (Math.round(acl.x) == 0 || Math.round(acl.x) == 1) {
        leftPressed = false;
        rightPressed = false;
        upPressed = false;
        downPressed = false;
    }
});
// A mettre dans la loupe
acl.start();