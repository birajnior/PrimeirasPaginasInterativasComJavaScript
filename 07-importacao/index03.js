const { gets, print } = require("./desafio03");
let numerosPar = [];

for (let i = 0; i < 18; i++) {
  const element = gets();
  if (element % 2 === 0) {
    numerosPar.push(element);
  }
}
print(numerosPar);
