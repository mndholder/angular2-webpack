let randomstring = require('randomstring');


export default class Random {

    public randomString(length: number): string {
        return randomstring.generate({
            length: length,
            charset: 'alphabetic'
        });
    };

    public randomInteger(length: number): number {
        return randomstring.generate({
            length: length,
            charset: 'numeric'
        });
    };

    public randomIntegerInRange(from: number, to: number): number {
        return Math.floor(Math.random() * (to - from)) + from;
    };
}
