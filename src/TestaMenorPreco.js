const carros = [
  { nome: "Lamborghini", preco: 1000000 },
  { nome: "Jipe", preco: 46000 },
  { nome: "Brasília", preco: 16000 },
  { nome: "Smart", preco: 46000 },
  { nome: "Fusca", preco: 17000 }
]

let maisBarato = buscaMenor(carros, 0, 4)

console.log(maisBarato)
console.log(`O carro mais barato é o ${carros[maisBarato].nome} e custa ${carros[maisBarato].preco}`)


function buscaMenor(carros, atual, final) {
  let maisBarato = 0

  for (; atual <= final; atual++) {
    if (carros[atual].preco < carros[maisBarato].preco) {
      maisBarato = atual
    }
  }

  return maisBarato
}
