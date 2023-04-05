/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const metodoPagamento = 3;

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

if (metodoPagamento === 1) {
  console.log(
    `Você recebeu 10% de desconto e vai pagar ` +
      aplicarDesconto(500, 10) +
      "R$"
  );
} else if (metodoPagamento === 2) {
  console.log(
    `Você recebeu 15% de desconto e vai pagar ` +
      aplicarDesconto(100, 15) +
      "R$"
  );
} else if (metodoPagamento === 3) {
  console.log(
    `Você teve um  acréscimo de 10% e vai pagar ` + aplicarJuros(100, 10) + "R$"
  );
} else {
  console.log(`Você irá pagar ` + aplicarDesconto(500, 0) + "R$");
}
