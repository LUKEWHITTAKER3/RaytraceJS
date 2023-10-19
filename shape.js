import { RAY_INTERSECT_THRESHOLD } from './config.js'

export class Shape {
    
    constructor(colour) {
        this.colour = colour;
    }

    intersect = () => {
        throw ('Cannot call intersect() on abstract Shape');
    }

    getClosestDistanceOnRay = ray => {
        let distances = this.intersect(ray).filter(d => d > RAY_INTERSECT_THRESHOLD);
        return Math.min.apply(distances);
    }
}