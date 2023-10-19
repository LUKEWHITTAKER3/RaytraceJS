// Represents a vector in 3D space
export class Vector {
    #x = 0;
    #y = 0;
    #z = 0;

    constructor(x=0, y=0, z=0) {
        this.#x = x;
        this.#y = y;
        this.#z = z;
    }

    // The x-component of the vector
    get x() { return this.#x; }

    // The y-component of the vector
    get y() { return this.#y; }

    // The z-component of the vector
    get z() { return this.#z; }

    // The length of the vector
    get magnitude() { Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2); }

    // The vector facing the opposite direction in all axis
    get inverse() { new Vector(-this.x, -this.y, -this.z); }

    // A normalised copy of the vector
    get unit() { this.divide(this.magnitude); }

    // A unit vector with a value of 1 on the X axis
    static X = Vector(1, 0, 0);

    // A unit vector with a value of 1 on the Y axis
    static Y = new Vector(0, 1, 0);

    // A unit vector with a value of 1 on the Z axis
    static Z = new Vector(0, 0, 1);

    // A vector with no length (0,0,0)
    static Origin = new Vector();

    // Returns the sum of a vector with this vector
    add = (v2) => new Vector(
        this.x + v2.x, this.y + v2.y, this.z + v2.z
    );

    // Returns the result of subtracting a vector from this vector
    subtract = (v2) => this.add(v2.inverse);

    // Returns a vector with each component multiplied by n
    scale = (n) => new Vector(
        this.x * n, this.y * n, this.z * n
    );

    // Returns a vector with each component divided by n
    divide = (n) => this.scale(1 / n);

    // Returns the dot product of a vector with this vector
    dot = (v2) => this.x * v2.x + this.y * v2.y;

    // Returns the cross product of a vector with this vector
    cross = (v2) => new Vector(
        this.y * v2.z - this.z * v2.y,
        this.z * v2.x - this.x * v2.z,
        this.x * v2.y - this.y * v2.x
    );

    // Creates a vector starting at p0 and ending at p1
    static from = (p0) => ({
        to: p1 => p1.subtract(p0)
    });
}