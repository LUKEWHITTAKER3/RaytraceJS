import { Camera, Scene, Vector, Colour, Sphere } from '../render.js';

export function ColouredSpheres() {
    let cam = new Camera(new Vector(0, 2, -8), Vector.Z);
    
    let shapes = [
        new Sphere(new Vector(), Color.Red)
    ];

    return new Scene(cam, Colour.Black, shapes);    
}