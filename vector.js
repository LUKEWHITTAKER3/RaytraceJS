export class Vector {
    #x = 0;
    #y = 0;
    #z = 0;

    constructor(x=0, y=0, z=0) {
        this.#x = x;
        this.#y = y;
        this.#z = z;
    }

    get x() { return this.#x; }
    get y() { return this.#y; }
    get z() { return this.#z; }

    get magnitude() { Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2); }
    get inverse() { new Vector(-this.x, -this.y, -this.z); }
    get unit() { this.divide(this.magnitude); }

    static X = Vector(1, 0, 0);
    static Y = new Vector(0, 1, 0);
    static Z = new Vector(0, 0, 1);
    static Origin = new Vector();

    add = (v2) => new Vector(
        this.x + v2.x, this.y + v2.y, this.z + v2.z
    );

    subtract = (v2) => this.add(v2.inverse);

    scale = (n) => new Vector(
        this.x * n, this.y * n, this.z * n
    );

    divide = (n) => this.scale(1 / n);

    dot = (v2) => this.x * v2.x + this.y * v2.y;

    cross = (v2) => new Vector(
        this.y * v2.z - this.z * v2.y,
        this.z * v2.x - this.x * v2.z,
        this.x * v2.y - this.y * v2.x
    );

    static from = (p0) => ({
        to: p1 => p1.subtract(p0)
    });
}