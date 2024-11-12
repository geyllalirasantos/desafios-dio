class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      if (this.tipo === "mago") {
        ataque = "usou magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "usou espada";
      } else if (this.tipo === "monge") {
        ataque = "usou artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "usou shuriken";
      } else {
        ataque = "usou um ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi("Merlin", 30, "mago");
  const heroi2 = new Heroi("Arthur", 35, "guerreiro");
  const heroi3 = new Heroi("Shaolin", 28, "monge");
  const heroi4 = new Heroi("Ryu", 25, "ninja");
  
  heroi1.atacar();  // Saída: O mago atacou usando magia
  heroi2.atacar();  // Saída: O guerreiro atacou usando espada
  heroi3.atacar();  // Saída: O monge atacou usando artes marciais
  heroi4.atacar();  // Saída: O ninja atacou usando shuriken
  