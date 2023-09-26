def main():
    #Entrada

    nome_aluno = input("Digite o nome do aluno: ")
    nota_redacao = int(input("Digite a nota da Redação do aluno: "))
    P1 = int(input("Digite o peso da Redação(P1): "))
    nota_linguagens = int(input("Digite a nota de Linguagens do aluno: "))
    P2 = int(input("Digite o peso da prova de Linguagens(P2): "))
    nota_matematica = int(input("Digite a nota de Matemática do aluno: "))
    P3 = int(input("Digite o peso da prova de Matemática(P3): "))
    nota_humanas = int(input("Digite a nota de Humanas do aluno: "))
    P4 = int(input("Digite o peso da prova de Humanas(P4): "))
    nota_natureza = int(input("Digite a nota de Natureza do aluno: "))
    P5 = int(input("Digite o peso da prova de Natureza do aluno(P5): "))

    #Processamento

    #Cálculo dos pontos

    pontos_linguagens = calcular_pontos(nota_linguagens)
    pontos_matematica = calcular_pontos(nota_matematica)
    pontos_humanas = calcular_pontos(nota_humanas)
    pontos_natureza = calcular_pontos(nota_natureza)

    #Cálculo da média simples
    media_simples = round(calcular_media_simples(nota_redacao, nota_linguagens, nota_matematica, nota_humanas, nota_natureza))

    #Cálculo da média pondera
    media_ponderada = round(calcular_media_pondera(nota_redacao, nota_linguagens, nota_matematica, nota_humanas, nota_natureza, P1, P2, P3, P4, P5))

    #Classificação
    nota_final = media_ponderada

    if nota_final > 0 and nota_final < 450:
        classificacao = "INSUFICIENTE"
        observacao = "Impedido de ir para Universidade. Deverá fazer mais um ano de ensino de reforço"
    elif nota_final >= 450  and nota_final < 650:
        classificacao = "SUFICIENTE"
        observacao = "Poderá conseguir uma vafa. Porém em Curso/Universidade com baixa procura (nota de corte baixa)"
    elif nota_final >= 650 and nota_final < 750:
        classificacao = "MUITO BOM"
        observacao = "Poderá pleitear vaga em bons cursos/Universidades.(Nota de corte alta)"
    else:
        classificacao = "EXCELENTE"
        observacao = "Poderá escolher qualquer curso em qualquer universidade de Serigate"

    #Saída

    print(f"************* SERIGATE NENEM **************")
    print(f"Aluno           : {nome_aluno}")
    print(f"-------------------------------------------")
    print(f"Redação         : {nota_redacao} (peso: {P1})")
    print(f"Linguagens      : {nota_linguagens} (peso: {P2})")
    print(f"Matemática      : {nota_matematica} (peso: {P3})")
    print(f"Humanas         : {nota_humanas} (peso: {P4})")
    print(f"Natureza        : {nota_natureza} (peso: {P5})")
    print(f"-------------------------------------------")
    print(f"Média Simples   : {media_simples}\n")
    print(f">>>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<")
    print(f"Média Ponderada: {media_ponderada}")
    print(f"Classificação: {classificacao}")
    print(f"Observação: {observacao}")
    print(f"-------------------------------------------")


def calcular_media_pondera(A1, A2, A3, A4, A5, P1, P2, P3, P4, P5):
    valor_media_ponderada = ((A1 * P1) + (A2 * P2) + (A3 * P3) + (A4 * P4) + (A5 * P5))/(P1 + P2 + P3 + P4 + P5)
    return valor_media_ponderada

def calcular_media_simples(A1, A2, A3, A4, A5):
    valor_media_simples = (A1 + A2 + A3 + A4 + A5)/5
    return valor_media_simples

def calcular_pontos(nota):
    pontos = (nota * 1000)/45
    return pontos


main()