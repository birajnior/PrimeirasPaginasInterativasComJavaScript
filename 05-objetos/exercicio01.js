/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  ano;
  gastoMedioLitroPorKm;

  constructor(marca, cor, ano, gastoMedioLitroPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.ano = ano;
    this.gastoMedioLitroPorKm = gastoMedioLitroPorKm;
  }

  calcularGastoViagem(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioLitroPorKm * precoCombustivel;
  }
}

const golG5umPontoZero = new Carro("Gol", "Branco", 2023, (1 / 14).toFixed(2));
console.log(golG5umPontoZero);
console.log(
  "Seu gasto com a viagem vai ser de " +
    golG5umPontoZero.calcularGastoViagem(50, 6.5).toFixed(2) +
    "R$"
);

const sandero1ponto6 = new Carro("Sandero", "Prata", 2011, (1 / 12).toFixed(2));
console.log(sandero1ponto6);
console.log(
  "Seu gasto com a viagem vai ser de " +
    sandero1ponto6.calcularGastoViagem(50, 6.5).toFixed(2) +
    "R$"
);
