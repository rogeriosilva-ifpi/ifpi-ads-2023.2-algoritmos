import { question } from 'readline-sync'

function main(){
  const lado_a = Number(question('A: '))
  const lado_b = Number(question('B: '))
  const lado_c = Number(question('C: '))

  if (eh_triangulo(lado_a, lado_b, lado_c)){
    console.log('SIM é um triângulo')
    const tipo = tipo_do_triangulo(lado_a, lado_b, lado_c)
    console.log(`E ele é do tipo ${tipo}`)
  }else{
    console.log('NÃO é um triângulo')
  }

  console.log('FIM.')
}


function eh_triangulo(a, b, c){
  // Opcao 1:
  /* 
  if ((a <= b + c) && (b <= a + c) && (c <= a + b)){
    return true
  }else{
    return false
  }*/

  // Opcao 2:
  return (a <= b + c) && (b <= a + c) && (c <= a + b)
}


function tipo_do_triangulo(a, b, c){
  if (eh_equilatero(a, b, c)){
    return 'EQUILÁTERO'
  }else if (eh_isosceles(a, b, c)){
    return 'ISÓSCELES'
  }else{
    return 'ESCALENO'
  }
}

function eh_equilatero(a, b, c){
  return a === b && b === c
}

function eh_isosceles(a, b, c){
  return !eh_equilatero(a, b, c) && (a === b || b === c || a === c)
}

main()