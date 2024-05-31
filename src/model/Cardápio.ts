import Item from "./Pratos";

export default class Pedido {
    itens:Item[];
    valorTotal:number;

    constructor() 
    {
    this.itens=[],
    this.valorTotal=0
    }
    adicionarItem(item:Item){
        this.itens.push(item);
        this.valorTotal+=item.valor;
        return{
            item:this.itens,
            valorTotal: this.valorTotal,
        }
    }
}