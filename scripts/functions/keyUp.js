function keyUp(e) {
    let turgut = document.querySelector("#turgut");
    let counterWalk = 0;
    let counterAxeX = turgut.style.left;
    let counterAxeY = turgut.style.top;
    if (e.code === "KeyW") {
        turgut.style.top = `${counterAxeY}` + "px";
    }
    if (e.code === "KeyS") {
        turgut.style.top = `${counterAxeY}` + "px";
    }
    if (e.code === "KeyA") {
        turgut.style.left = `${counterAxeX}` + "px";
    }
    if (e.code === "KeyD") {
        turgut.style.left = `${counterAxeX}` + "px";
    }

}


export default keyUp;