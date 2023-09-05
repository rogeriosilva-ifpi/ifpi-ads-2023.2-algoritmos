import { question } from 'readline-sync'

/**
 Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo 
 (a soma dos ângulos internos é igual a 180o). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90o), 
retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). 
Não existe ângulo com tamanho 0o (zero grau).
 */
function main(){
  const ang_a = Number(question('Angulo A: '))
  const ang_b = Number(question('Angulo B: '))
  const ang_c = Number(question('Angulo C: '))

  if (eh_triangulo(ang_a, ang_b, ang_c)){
    console.log('SIM, formam um Triângulo!')
    const tipo_triangulo = classificar_triangulo(ang_a, ang_b, ang_c)
    console.log(`Inclusive, ele é um Triângulo ${tipo_triangulo}`)
  }else{
    console.log('Sinto muito, porém esses angulos não formam um triângulo!')
  }

}

function eh_triangulo(ang_a, ang_b, ang_c){

  if (ang_a <= 0 || ang_b <= 0 || ang_c <= 0){
    return false
  }

  const soma_angulos = ang_a + ang_b + ang_c
  if (soma_angulos === 180){
    return true
  }else{
    return false
  }
}


function classificar_triangulo(ang_a, ang_b, ang_c){
  if (ang_a === 90 || ang_b === 90 || ang_c === 90){
    return 'Retângulo'
  }else if (ang_a < 90 && ang_b < 90 && ang_c < 90){
    return 'Acutângulo'
  }else{
    return 'Obtusângulo'
  }
}

main()