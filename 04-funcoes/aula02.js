function escrevaMeuNome(nome) {
  return "Meu nome é " + nome;
}

// escrevaMeuNome("Ubiratan");

function verificaIdade(idade) {
  if (idade >= 18) {
   console.log(escrevaMeuNome("Ubiratan")  + ", Maior de idade!"); 
  } else {
    console.log("Menor de idade");
  }
}

verificaIdade(19)
