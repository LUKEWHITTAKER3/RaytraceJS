import { Render, Colour, Vector, Camera, Scene } from './render.js';

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let render = new Render(canvas.clientWidth, canvas.clientHeight);

function paint(x, y, colour) {
    ctx.fillStyle = colour.html;
    ctx.fillRect(x, y, 1, 1);
}

let camera = new Camera(new Vector(-4, 1, -5), Vector.Origin);
let scene = new Scene(camera, Colour.Red);
render.render(scene, paint);

console.log( (new Colour(255,0, 0)).html );