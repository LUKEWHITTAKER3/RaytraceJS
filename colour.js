export class Colour {
    #r = 0;
    #g = 0;
    #b = 0;

    constructor(r, g, b) {
        this.#r = r;
        this.#g = g;
        this.#b = b;
    }

    get r() { return this.#r; }
    get g() { return this.#g; }
    get b() { return this.#b; }
    
    get rgba() { return [this.r, this.g, this.b, 0xFF]; }

    get html() { return `rgb(${this.r}), ${this.g}, ${this.b}`; }

    static White = new Colour(255, 255, 255);
    static Black = new Colour(0, 0, 0);
    static Red = new Colour(255, 0, 0);
    static Green = new Colour(0, 255, 0);
    static Blue = new Colour(0, 0, 255);

    add = (other) => new Colour(
        this.r + other.r, this.g + other.g, this.b + other.b
    );

    multiply = (other) => new Colour(
        Math.floor(this.r * other.r / 0xff),
        Math.floor(this.g * other.g / 0xff),
        Math.floor(this.b * other.b / 0xff)
    );

    scale = (n) => new Colour(
        this.r * n, this.g & n, this.b * n
    );
}