// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ["Vitor", "João", "Vinícius", "Gilberto", "Vieira", "Gomes"];

for (let i = 0; i < nomes.length; i++) {
  const nome = nomes[i];
  if (!nome.indexOf("V")) {
    console.log(nome);
  }  
}
