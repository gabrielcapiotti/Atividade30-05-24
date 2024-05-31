"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Retangulo {
    constructor(comprimento, altura) {
        this.comprimento = comprimento;
        this.altura = altura;
    }
    desenhar() {
        console.log(`Desenho de retângulo com comprimento ${this.comprimento} e altura ${this.altura}.`);
    }
    redimensionar() {
        console.log(`Redimensionar retângulo com comprimento ${this.comprimento} e altura ${this.altura}.`);
    }
}
exports.default = Retangulo;
