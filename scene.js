import { Colour } from './colour.js';

export class Scene {

    constructor(camera, background=Colour.Black) {
        this.camera = camera;
        this.background = background;
    }

    trace = (x, y) => this.camera.trace(this, x, y);
}