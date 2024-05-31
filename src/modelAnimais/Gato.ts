
import Animal from "./Animal";

class Gato extends Animal {
  som(): void {
    console.log(`Gato comer? ${this.comer}`);
    console.log(`Gato anda? ${this.andar}`);
    console.log(`Gato respira? ${this.respirar}`);
    console.log("Gato faz miau");
  }
}

export default Gato;