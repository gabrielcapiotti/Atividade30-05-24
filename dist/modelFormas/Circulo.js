"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    desenhar() {
        console.log(`Desenhando um círculo de raio ${this.raio}`);
    }
    redimensionar() {
        console.log(`Redimensionando círculo de raio ${this.raio}`);
    }
}
exports.default = Circulo;
