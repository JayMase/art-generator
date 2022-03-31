console.log("The machine is starting up.");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const { createGzip } = require("zlib");
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

const saveLayer = (_canvas) => {
    fs.writeFileSync("./newImage.jpg", _canvas.toBuffer("image/png"));
    console.log("image created");
}

const drawLayer = async () => {
    const image = await loadImage("./mood.jpg");
    ctx.drawImage(image, 0, 0, 1000, 1000);
    console.log("Heating Up.");
    saveLayer(canvas);
}

drawLayer();
