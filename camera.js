import { Vector } from './vector.js';
import { Ray } from './ray.js';

// Represents a device through which the user views a scene
export class Camera {

    constructor(position, look_at, width = 4, height = 9/4) {
        this.position = position;
        this.look_at = look_at;

        this.direction = Vector.from(this.position).to(this.look_at).unit;
        this.right = Vector.Y.cross(this.direction).unit;
        this.up = this.right.cross(this.direction).unit();
    }
    
    // Traces a ray at [x, y] in screen space through a given scene and returns the colour it intersects with
    trace(scene, x, y) {
        let x_ray = this.right.scale(x);
        let y_ray = this.up.scale(y).inverse;
        let ray_dir = this.direction.add(x_ray).add(y_ray);
        let ray = new Ray(this.position, ray_dir);
        return ray.trace(scene);
    }

}