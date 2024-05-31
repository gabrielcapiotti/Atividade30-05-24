import FormatoElemento from "./FormatoElemento";

export default class Circulo implements FormatoElemento {
    raio: number;

    constructor(raio:number) {
        this.raio=raio;
    }
    
    desenhar():void{
        console.log(`Desenhando um círculo de raio ${this.raio}`);
        
    }
    redimensionar():void{
        console.log(`Redimensionando círculo de raio ${this.raio}`);
        
    }
    
}









