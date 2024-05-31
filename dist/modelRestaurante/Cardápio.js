"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cardápio {
    constructor() {
        this.itens = [],
            this.valorTotal = 0;
    }
    adicionarItem(item) {
        this.itens.push(item);
        this.valorTotal += item.valor;
        return {
            item: this.itens,
            valorTotal: this.valorTotal,
        };
    }
}
exports.default = Cardápio;
