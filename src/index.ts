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