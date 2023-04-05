class pessoa1 {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos!`);
  }
}

const ubiratan = new pessoa1();
ubiratan.nome = "Ubiratan B Gomes";
ubiratan.idade = 52;

const ubiratanJr = new pessoa1();
ubiratanJr.nome = "Ubiratan B G Júnior";
ubiratanJr.idade = 28;

ubiratan.descrever();
ubiratanJr.descrever();

class pessoa2 {
  nome;
  idade;
  anoDeNascimento;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos!`);
  }
}

const ubiratann = new pessoa2("Ubiratan B. Gomes", 54);
const ubiratanJrr = new pessoa2("Ubiratan B. Gomes Jr.", 29);
ubiratan.descrever();
ubiratanJr.descrever();
console.log(ubiratann);
console.log(ubiratanJrr);
