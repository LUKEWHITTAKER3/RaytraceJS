// Represents a line defined by a 3D origin point and a normalised direction
export class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction.unit;
    }

    // Traces the ray through a scene and returns the colour of whatever it intersects with
    trace = (scene) => scene.background;
}