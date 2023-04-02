/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
    4 - Em duas vezes, preço normal de etiqueta sem juros;
*/

const precoEtiqueta = 500;
const metodoPagamento = 2;

if (metodoPagamento === 1) {
  let desconto = parseFloat((precoEtiqueta * 15) / 100);
  let valorFinal = precoEtiqueta - desconto;
  console.log(`Você recebeu 15% de desconto e vai pagar ${valorFinal}R$`);
} else if (metodoPagamento === 2) {
  let desconto = parseFloat((precoEtiqueta * 10) / 100);
  let valorFinal = precoEtiqueta - desconto;
  console.log(`Você recebeu 10% de desconto e vai pagar ${valorFinal}R$`);
} else if (metodoPagamento === 3) {
  let desconto = parseFloat((precoEtiqueta * 10) / 100);
  let valorFinal = precoEtiqueta + desconto;
  console.log(`Você teve um  acréscimo de 10% e vai pagar ${valorFinal}R$`);
} else {
  console.log(`Você irá pagar ${precoEtiqueta}R$`);
}
