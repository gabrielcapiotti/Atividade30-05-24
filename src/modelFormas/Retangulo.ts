import Circulo from "./Circulo";
import FormatoElemento from "./FormatoElemento";

export default class Retangulo implements FormatoElemento {
    comprimento:number;
    altura:number;

    constructor(
        comprimento:number,
        altura:number,
    ) 
    {
        this.comprimento=comprimento;
        this.altura=altura;
    }
    
    desenhar():void{
        console.log(`Desenho de retângulo com comprimento ${this.comprimento} e altura ${this.altura}.`);
        
    }
    redimensionar():void{
        console.log(`Redimensionar retângulo com comprimento ${this.comprimento} e altura ${this.altura}.`);
        
    }
    
}

