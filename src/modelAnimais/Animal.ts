abstract class Animal {
    protected comer: boolean;
    protected andar: boolean;
    protected respirar: boolean;
  
    constructor(comer = true, andar = true, respirar = true) {
      this.comer = comer;
      this.andar = andar;
      this.respirar = respirar;
    }
    abstract som(): void;
  }
  
  export default Animal;