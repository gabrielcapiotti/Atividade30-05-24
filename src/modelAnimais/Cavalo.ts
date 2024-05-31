import Animal from "./Animal";

class Cavalo extends Animal {
  som(): void {
    console.log(`Cavalo comer? ${this.comer}`);
    console.log(`Cavalo anda? ${this.andar}`);
    console.log(`Cavalo respira? ${this.respirar}`);
    console.log("Cavalo faz Iiirrrrí");
  }
}

export default Cavalo;