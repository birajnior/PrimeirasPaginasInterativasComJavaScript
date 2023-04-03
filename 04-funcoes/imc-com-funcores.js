function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Você está abaixo do peso!!!";
  } else if (imc >= 18.5 && imc < 25) {
    return "VocÊ está com o peso normal!";
  } else if (imc >= 25 && imc < 30) {
    return "Você está acima do peso!!";
  } else if (imc >= 30 && imc <= 40) {
    return "Você está obeso!!!";
  } else {
    return "Vocês está com obesidade grave!!!!";
  }
}

function main() {
  const imc = calcularImc(130, 1.78);
  console.log(`Seu IMC é de ${imc.toFixed(2)}`);
  console.log(classificarImc());
}

main();

console.log("Função invocada imediatamente ⬇️");
// Função invocada imediatamente, é uma função chamada imediatamente depois de ser declarada.
(function () {
  const imc = calcularImc(130, 1.78);
  console.log(`Seu IMC é de ${imc.toFixed(2)}`);
  console.log(classificarImc());
})();
