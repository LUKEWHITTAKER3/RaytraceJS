import { Shape } from './shape';
import { Vector } from './vector';

export class Sphere extends Shape {

    constructor(position, radius, colour) {
        super(colour);
        this.position = position;
        this.radius = radius;
    }

    intersect = ray => {
        let toSphere = Vector.from(ray.position).to(this.position);
        let a = ray.direction.dot(ray.direction);
        let b = 2 * ray.direction.dot(toSphere);
        let c = toSphere.dot(toSphere) - this.radius ** 2;

        let delta = b ** 2 - 4 * c;
        if (delta < 0) return [];
        if (delta == 0) return [-b / 2];
        return [ (-b - Math.sqrt(delta) / 2), (-b + Math.sqrt(delta)) / 2 ];
    }
}