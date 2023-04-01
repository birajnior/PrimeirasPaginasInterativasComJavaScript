const precoDoEtanol = 5.3;
const precoDaGasolina = 6.05;
const gastoDeCombustivelDoCarro = 14;
const distanciaViagemKm = 150;
let tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaViagemKm / gastoDeCombustivelDoCarro;

if (tipoCombustivel === "Etanol") {
  const custoViagem = litrosConsumidos * precoDoEtanol;
  console.log(
    `Você vai gastar ${custoViagem.toFixed(
      2
    )} Reais de etanol para realizar sua viagem!`
  );
} else {
  const custoViagem = litrosConsumidos * precoDaGasolina;
  console.log(
    `Você vai gastar ${custoViagem.toFixed(
      2
    )} Reais de gasolina para realizar sua viagem!`
  );
}
