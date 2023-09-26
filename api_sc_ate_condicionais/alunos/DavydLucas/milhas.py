def main():
    #Entrada
    milhas = int(input("Digite a quantidade de minlhas que deseja comprar(múltiplos de 1000): "))
    if milhas % 1000 == 0:
        desconto = int(input("Digite a quantidade do desconto:  (%)"))
            if desconto >= 0 and desconto <= 80:
                bonus = int("Digite o valor percentual do bônus entre 0 e 300(%): ")
                    if bonus >= 0 and bonus <= 300:
                                
                    else:
                        return 'Erro! Valor digitado fora da faixa.'            
            else:
                return 'Erro! Valor digitado fora da faixa.'
    else:
        return 'Não é possível fazer o cálculo com essas quantidades de milhas, apenas com múltiplos de 1000.'
    #Processamento

    #Saída


main()