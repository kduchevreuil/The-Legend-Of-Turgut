function keyDown(e) {
    let turgut = document.querySelector("#turgut");
    let counterWalk = 0;

    if (e.code === "KeyW") {
        turgut.style.backgroundImage = "url('./imagesOfTurgut/turgut01DownStay.png')";
        console.log(turgut.style);
        turgut.style.top = `${turgut.style.left.slice(0, 2) - counterWalk}` + "px";
        counterWalk++;
        if (
            turgut.style.backgroundImage ==
            "url('./imagesOfTurgut/turgut01DownStay.png')" ||
            counterWalk > 30
        ) {
            turgut.style.backgroundImage =
                "url('./imagesOfTurgut/turgut01DownStay.png')";
            if (counterWalk > 60) {
                counterWalk = 0;
            }
        }
    }
    if (e.code === "KeyS") {
        turgut.style.backgroundImage =
            "url('./imagesOfTurgut/turgut01DownStay.png')";
        turgut.style.top = `${counterAxeY}` + "px";
        counterAxeY = counterAxeY + 2;
        counterWalk++;
        if (
            turgut.style.backgroundImage ==
            "url('./imagesOfTurgut/turgut01DownStay.png')" ||
            counterWalk > 3
        ) {
            turgut.style.backgroundImage =
                "url('./imagesOfTurgut/turgut01DownStay.png')";
            if (counterWalk > 6) {
                counterWalk = 0;
            }
        }
    }
    if (e.code === "KeyA") {
        turgut.style.backgroundImage =
            "url('./imagesOfTurgut/turgut01DownStay.png')";

        turgut.style.left = `${counterAxeX}` + "px";
        counterAxeX = counterAxeX - 2;
        counterWalk++;

        if (
            turgut.style.backgroundImage ==
            "url('./imagesOfTurgut/turgut01DownStay.png')" ||
            counterWalk > 3
        ) {
            turgut.style.backgroundImage =
                "url('./imagesOfTurgut/turgut01DownStay.png')";
            if (counterWalk > 6) {
                counterWalk = 0;
            }
        }
    }
    if (e.code === "KeyD") {
        turgut.style.backgroundImage =
            "url('./imagesOfTurgut/turgut01DownStay.png')";

        turgut.style.left = `${counterAxeX}` + "px";
        counterAxeX = counterAxeX + 2;
        counterWalk++;
        if (
            turgut.style.backgroundImage ==
            "url('./imagesOfTurgut/turgut01DownStay.png')" ||
            counterWalk > 3
        ) {
            turgut.style.backgroundImage =
                "url('./imagesOfTurgut/turgut01DownStay.png')";
            if (counterWalk > 6) {
                counterWalk = 0;
            }
        }
    }
}

export default keyDown;