const { gets, print } = require("./desafio02");
const numeros = gets();
let maior = 0;

for (let i = 0; i < numeros; i++) {
  const numeroMaior = gets();
  if (numeroMaior > maior) {
    maior = numeroMaior;
  }
}
print(maior);

let number = numeros;
for (let i = 0; i < numeros; i++) {
  const numeroMenor = gets();
  if (numeroMenor < number) {
    number = numeroMenor;
  }
}
print(number);
