import { Colour } from './colour.js';
import { Vector } from './vector.js';
import { Camera } from './camera.js';
import { Scene } from './scene.js';

class Render {
    #canvasWidth;
    #canvasHeight;

    constructor(width, height) {
        this.#canvasWidth = width;
        this.#canvasHeight = height;
    }

    render(scene, callback) {
        for (let x = 0; x < this.#canvasWidth; x++) {
            for (let y = 0; y < this.#canvasHeight; y++) {
                let colour = scene.trace(x, y);
                callback(x, y, colour);
            }
        }
    }
}

export { Render, Colour, Vector, Camera, Scene }