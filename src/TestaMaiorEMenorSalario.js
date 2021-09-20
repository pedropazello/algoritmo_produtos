const pessoas = [
  { nome: "Fernando", salario: 3200 },
  { nome: "Alfredo", salario: 6000 },
  { nome: "Flávio", salario: 5000 },
  { nome: "Marcela", salario: 2200 }
]

let menorSalario = 0
let maiorSalario = 0

pessoas.forEach((_, index) => {
  if (pessoas[index].salario > pessoas[maiorSalario].salario) {
    maiorSalario = index
  }

  if (pessoas[index].salario < pessoas[menorSalario].salario) {
    menorSalario = index
  }
})

console.log(`O maior salario é do(a) ${pessoas[maiorSalario].nome} com valor de ${pessoas[maiorSalario].salario}`)

console.log(`O menor salario é do(a) ${pessoas[menorSalario].nome} com valor de ${pessoas[menorSalario].salario}`)
