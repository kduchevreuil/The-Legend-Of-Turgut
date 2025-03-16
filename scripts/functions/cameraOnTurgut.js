
function turgutCamera() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const turgutImages = canvas.tugutImages;
    ctx.imageSmoothingEnabled = false;

    turgutImages.scrollIntoView({ behavior: "auto", block: "center", inline: "center" });
    let screenX = window.visualViewport.height / 6;
    let screenY = window.visualViewport.width / 6;
}

export default turgutCamera;