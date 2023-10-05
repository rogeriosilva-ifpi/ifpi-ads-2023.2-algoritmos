import { dinheiro, get_positive_number, get_text, print } from '../../utils/input.js'
import { porcentagem } from '../../utils/math.js'

function main(){
  print(`[-------- SAMU -------]`)
  let qtd_funcionarios = get_positive_number('Quantidade de Funcionários: ')

  while (qtd_funcionarios > 0){
    const codigo = get_text('Código: ')
    const horas = get_positive_number('Horas: ')
    const dependentes = get_positive_number('Dependentes: ')

    const salario_bruto = calcular_salario(horas, dependentes)
    const inss = porcentagem(salario_bruto, 8.5)
    const ir = porcentagem(salario_bruto, 5)
    const descontos = inss + ir

    const salario_liquido = salario_bruto - descontos

    const contra_cheque = `
    |----- CONTRACHEQUE ------|
     | GANHOS:
     | - Salário: ${dinheiro(salario_bruto)}
     | DESCONTOS:
     | - INSS   : ${dinheiro(inss)}
     | - IR     : ${dinheiro(ir)}
     --------------------------
     | LIQUIDO: ${dinheiro(salario_liquido)}
    `

    print(contra_cheque)

    qtd_funcionarios--
  }



}

function calcular_salario(horas, dependentes){
  const salario = (horas * 12) + (dependentes * 40)
  return salario
}

main()