import Animal from "./Animal";

class Cachorro extends Animal {
  som(): void {
    console.log(`Cachorro comer? ${this.comer}`);
    console.log(`Cachorro anda? ${this.andar}`);
    console.log(`Cachorro respira? ${this.respirar}`);
    console.log("cachorro faz aaaaaaaau");
  }
}

export default Cachorro;