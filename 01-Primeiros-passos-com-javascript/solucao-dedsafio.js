const precoDoCombustivel = 6;
const gastoDeCombustivelDoCarro = 12;
const distanciaViagemKm = 50;

let valorGastoCombustivelViagem = (distanciaViagemKm / gastoDeCombustivelDoCarro) * precoDoCombustivel;

console.log(
  `Para fazer essa viagem você irá gastar ${valorGastoCombustivelViagem} Reais de combustível.`
);
