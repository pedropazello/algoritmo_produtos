let carros = [
  { nome: "Lamborghini", preco: 1000000 },
  { nome: "Jipe", preco: 46000 },
  { nome: "Brasília", preco: 16000 },
  { nome: "Smart", preco: 46000 },
  { nome: "Fusca", preco: 17000 }
]

// selectionSort(carros, 5)
insertionSort(carros, 5)

function insertionSort(carros, quantidadeDeElementos) {
  // n
  for (var atual = 0; atual <= quantidadeDeElementos - 1; atual++) {
    console.log(`status atual`)
    console.log(carros)
    console.log(`verificando a posição ${atual}`)

    analise = atual
    console.log(`valor do anterior menos 1 ${analise - 1}`)

    // n^2
    while(analise > 0 && carros[analise].preco < carros[analise - 1].preco ) {
      carrosAnalise = carros[analise]
      carrosAnteriorMenos1 = carros[analise - 1]

      console.log(`Trocou ${carrosAnalise.nome} por ${carrosAnteriorMenos1.nome}`)

      carros[analise - 1] = carrosAnalise
      carros[analise] = carrosAnteriorMenos1

      analise = analise - 1

      console.log("")
      console.log("")
      console.log("")
      console.log(carros)
    }
  }

  console.log(carros)
}

function selectionSort(carros, quantidadeDeElementos) {
  // n
  for(var atual = 0; atual <= quantidadeDeElementos - 1; atual++) {
    // n || 2n
    let maisBarato = buscaMenor(carros, atual, quantidadeDeElementos - 1)

    let carroAtual = carros[atual]
    let carroMaisBarato = carros[maisBarato]

    carros[atual] = carroMaisBarato
    carros[maisBarato] = carroAtual
  }

  console.log(carros)
}


function buscaMenor(carros, inicio, final) {
  let maisBarato = inicio

  // n || 2n
  for (var atual = inicio; atual <= final; atual++) {
    if (carros[atual].preco < carros[maisBarato].preco) {
      maisBarato = atual
    }
  }

  return maisBarato
}
