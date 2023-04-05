
const pessoa = {
  nome: "Ubiratan",
  idade: 28,
  endereço: {
    estado: "SP",
    cidade: "São Paulo",
    bairro: "Jabaquara",
  },
  descrever: function () {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos!`);
  },
};

pessoa.descrever();

// Acessando dinamicamente
const atributo = "idade";
console.log(pessoa[atributo]);
console.log(pessoa["nome"]);

// Da para editar o objeto a qualquer momento!
pessoa.nome = "João";
pessoa.idade = 50;
pessoa.descrever();
