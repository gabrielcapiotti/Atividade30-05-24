import Pedido from "./model/Cardápio";
import Item from "./model/Pratos";
import Circulo from "./modelFormas/Circulo";
import Retangulo from "./modelFormas/Retangulo";

const item=new Item(30,"camiseta","algodão");
const pedido= new Pedido();
pedido.adicionarItem(item);

console.log(pedido.itens);


console.log(item);




const circulo = new Circulo(5);
circulo.desenhar();
circulo.redimensionar();

const retangulo = new Retangulo(10, 20);
retangulo.desenhar();
retangulo.redimensionar();

console.log(circulo);











interface Desconto {
    aplicarDescontoEmPorcentagem(desconto: number): void{
      throw 'Pegadinha do malandro!';
    }
  }
  
  interface ValorPedido {
    aplicarDescontoEmReais(desconto: number): void;
    removeItem(item: string) {
      const index = this.itens.findIndex((i) => i.nome === item);
      if (index > -1) {
        this.itens.splice(index, 1);
      }
    }
  }
  
  class Pedido implements ValorPedido {
    itens: ItemPedido[] = [];
  
    add(item: ItemPedido): void {
      this.itens.push(item);
    }
  
    recuperarValorTotal(): number {
      let total = this.itens
        .map((i) => i.recuperarValorTotal())
        .reduce((sum, v) => sum + v, 0);
  
      return total;
    }
  
    aplicarDescontoEmPorcentagem(desconto: number): void {
      const porcentagem = desconto / 100;
      const descontoEmReais = this.valor * porcentagem;
      this.valor -= descontoEmReais;
    }
  }
  
  class ItemPedido extends ValorPedido, Desconto {
    valor: number;
    nome: string;
    quantidade: number;
  
    constructor(valor: number, nome: string, quantidade: number) {
      this.valor = valor;
      this.nome = nome;
      this.quantidade = quantidade;
    }
  
    recuperarValorTotal(): number {
      return this.valor * this.quantidade;
    }
  
   
  
    aplicarDescontoEmReais(desconto: number): void {
      this.valor -= desconto;
    }
  }