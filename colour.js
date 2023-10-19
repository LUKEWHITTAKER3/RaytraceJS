// Represents a RGB colour
export class Colour {
    #r = 0;
    #g = 0;
    #b = 0;

    constructor(r=0, g=0, b=0) {
        this.#r = r;
        this.#g = g;
        this.#b = b;
    }

    // The red component of the colour
    get r() { return this.#r; }

    // The green component of the colour
    get g() { return this.#g; }

    // The blue component of the colour
    get b() { return this.#b; }
    
    // The red, green, blue, and alpha components of this colour in array form
    get rgba() { return [this.r, this.g, this.b, 0xFF]; }

    // HTML-ised representation of this colour
    get html() { return `rgb(${this.r}), ${this.g}, ${this.b}`; }

    static White = new Colour(255, 255, 255);
    static Black = new Colour();
    static Red = new Colour(255, 0, 0);
    static Green = new Colour(0, 255, 0);
    static Blue = new Colour(0, 0, 255);

    // Adds the individual red, green, and blue components of this colour and another colour
    add = (other) => new Colour(
        this.r + other.r, this.g + other.g, this.b + other.b
    );

    // Multiplies the individual red, green, and blue components of this colour and another (scaled down)
    multiply = (other) => new Colour(
        Math.floor(this.r * other.r / 0xff),
        Math.floor(this.g * other.g / 0xff),
        Math.floor(this.b * other.b / 0xff)
    );

    // Multiplies the individual red, green, and blue components of this colour by a number
    scale = (n) => new Colour(
        this.r * n, this.g & n, this.b * n
    );
}