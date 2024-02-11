class Store {
    #reducer;
    #state;
    #cbs = [];

    constructor(reducer, initialState) {
        this.#reducer = reducer;
        this.#state = initialState;
    }

    getState() {
        return this.#state;
    }

    subscribe(cb) {
        this.#cbs.push(cb);
    }

    dispatch(action) {
        this.#state = this.#reducer(this.#state, action);
        this.#cbs.forEach(cb => cb());
    }
}

class Password {
    #password;

    constructor(password) {
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }
}

class StoreThunk extends Store {
    dispatch(action) {
        if (typeof action === 'function') {
            action(this.dispatch.bind(this), this.getState.bind(this));
        } else {
            super.dispatch(action);
        }
    }
}

class RGB {
    #r;
    #g;
    #b;

    constructor(r = 0, g = 0, b = 0) {
        this.#r = this.#checkColorValue(r);
        this.#g = this.#checkColorValue(g);
        this.#b = this.#checkColorValue(b);
    }

    #checkColorValue(value) {
        if (typeof value !== 'number' || value < 0 || value > 255) {
            throw new RangeError('Color value must be a number between 0 and 255');
        }
        return value;
    }

    get r() {
        return this.#r;
    }

    set r(value) {
        this.#r = this.#checkColorValue(value);
    }

    get g() {
        return this.#g;
    }

    set g(value) {
        this.#g = this.#checkColorValue(value);
    }

    get b() {
        return this.#b;
    }

    set b(value) {
        this.#b = this.#checkColorValue(value);
    }

    get rgb() {
        return `rgb(${this.#r},${this.#g},${this.#b})`;
    }

    set rgb(value) {
        const match = value.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
        if (match) {
            this.#r = this.#checkColorValue(parseInt(match[1]));
            this.#g = this.#checkColorValue(parseInt(match[2]));
            this.#b = this.#checkColorValue(parseInt(match[3]));
        } else {
            throw new SyntaxError('Invalid rgb syntax');
        }
    }

    get hex() {
        return `#${this.#r.toString(16).padStart(2, '0')}${this.#g.toString(16).padStart(2, '0')}${this.#b.toString(16).padStart(2, '0')}`;
    }

    set hex(value) {
        const match = value.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (match) {
            this.#r = this.#checkColorValue(parseInt(match[1], 16));
            this.#g = this.#checkColorValue(parseInt(match[2], 16));
            this.#b = this.#checkColorValue(parseInt(match[3], 16));
        } else {
            throw new SyntaxError('Invalid hex syntax');
        }
    }
}

class RGBA extends RGB {
    #a;

    constructor(r = 0, g = 0, b = 0, a = 1) {
        super(r, g, b);
        this.#a = this.#checkAlphaValue(a);
    }

    #checkAlphaValue(value) {
        if (typeof value !== 'number' || value < 0 || value > 1) {
            throw new RangeError('Alpha value must be a number between 0 and 1');
        }
        return value;
    }

    get a() {
        return this.#a;
    }

    set a(value) {
        this.#a = this.#checkAlphaValue(value);
    }

    get rgba() {
        return `rgba(${this.#r},${this.#g},${this.#b},${this.#a})`;
    }

    set rgba(value) {
        const match = value.match(/^rgba\((\d+),(\d+),(\d+),(\d*(?:\.\d+)?)\)$/);
        if (match) {
            this.#r = this.#checkColorValue(parseInt(match[1]));
            this.#g = this.#checkColorValue(parseInt(match[2]));
            this.#b = this.#checkColorValue(parseInt(match[3]));
            this.#a = this.#checkAlphaValue(parseFloat(match[4]));
        } else {
            throw new SyntaxError('Invalid rgba syntax');
        }
    }

    set hex(value) {
        if (value.length === 9) {
            const match = value.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
            if (match) {
                this.#r = this.#checkColorValue(parseInt(match[1], 16));
                this.#g = this.#checkColorValue(parseInt(match[2], 16));
                this.#b = this.#checkColorValue(parseInt(match[3], 16));
                this.#a = this.#checkAlphaValue(parseInt(match[4], 16) / 255);
            } else {
                throw new SyntaxError('Invalid hex syntax');
            }
        } else {
            super.hex = value;
        }
    }

    set color(value) {
        if (value.startsWith('#')) {
            this.hex = value;
        } else if (value.startsWith('rgba')) {
            this.rgba = value;
        } else if (value.startsWith('rgb')) {
            this.rgb = value;
        } else {
            throw new SyntaxError('Invalid color syntax');
        }
    }
}

// Код для перевірки
const rgb = new RGB();
rgb.r = 15;
rgb.g = 128;
rgb.b = 192;
console.log(rgb.hex); //#0F80C0
console.log(rgb.rgb); //rgb(15,128,192)
rgb.hex = '#203040';
console.log(rgb.rgb); //rgb(32, 48, 64)
rgb.rgb = 'rgb(100, 90, 50)';
console.log(rgb.r, rgb.g, rgb.b); //100, 90, 50

rgb.hex = 'діч'; //SyntaxError
rgb.r = 1000; //RangeError

const rgba = new RGBA();
rgba.hex = '#80808080';
console.log(rgba.a); //0.5
console.log(rgba.rgba); //rgba(128,128,128,0.5)
rgba.r = 192;
rgba.a = 0.25;
console.log(rgba.hex); //#C0808040

rgba.color = 'rgba(1,2,3,0.70)';
rgba.b *= 10;
console.log(rgba.hex); //#01021EB3
