import { question } from "readline-sync"

function main(){
  console.log('Imposto de renda')
  const renda = Number(question('Renda: '))

  const imposto = calcular_ir(renda)

  console.log(`Seu Imposto é R$ ${imposto.toFixed(2)}`)
}

function calcular_ir(renda){
  
  let imposto = 0

  // 0% - ISENTO
  if (renda <= 2600){
    return 0
  }else{
    imposto += 2600 * (0/100)
    renda = renda - 2600
  }

  // 7.5% 
  if (renda <= 1100){ 
    imposto += renda * (7.5/100)
    return imposto
  }else{
    imposto += 1100 * (7.5/100)
    renda = renda - 1100
  }

  // 15% 
  if (renda <= 900){ 
    imposto += renda * (15/100)
    return imposto
  }else{
    imposto += 900 * (15/100)
    renda = renda - 900
  }

  // 27% 
  imposto += renda * (27.5/100)
  return imposto

}

main()