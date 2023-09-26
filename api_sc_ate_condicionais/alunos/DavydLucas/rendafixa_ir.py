def main():
    #Entrada

    valor_investido = input(float("Digite o valor que deseja investir: "))
    taxa_rendimento = input(float("Digite a Taxa de Rendimento: "))
    mes_investimento = input(int("Digite o mes de investimento (mm): "))
    ano_investimento = input(int("Digite o ano do investimento (aaaa):"))
    mes_resgate = input(int("Digite o mes que deseja resgatar o investimento (mm): "))
    ano_resgate = input(int("Digite o ano em que deseja resgatar o investimento (aaaa):"))

    #Processamento

    tempo == 1
    if ano_investimento == ano_resgate:
        tempo = mes_resgate - mes_investimento
    else:
        tempo = round((((ano_resgate * 365) + (mes_resgate * 30)) - ((ano_investimento * 365) + (mes_investimento * 30)))/30) 
    
    #Rendimento Bruto
    rendimento_bruto = calcular_rendimento_bruto(valor_investido, taxa_rendimento, tempo)

    #Valor IOF
    IOF = calcular_IOF(valor_ganho_investimento)

    #Valor CDB
    CDB = calcular_rendimento_bruto(valor_investido, 1, tempo)

    IR = calcular_IR(valor_ganho_investimento, aliquota)

    total_imposto = IOF + IR

    #Valor do ganho Líquido
    ganho_liquido = (valor_ganho_investimento - (total_imposto))

    #Rendimento líquido(%)
    rendimento_liquido = (ganho_liquido/valor_investido) * 100

    #Saída
    print("******* TRIBUTAÇÃO RENDA FIXA *******")
    print(f"Valor investido     : {valor_investido}")
    print(f"Taxa de rendimento  : {taxa_rendimento}% a.m")
    print(f"Investido em        : {mes_investimento}/{ano_investimento}")
    print(f"Realizado em        : {mes_resgate}/{ano_resgate}")
    print("-------------------------------------")
    print(f"Rendimento Bruto    : R$ {rendimento_bruto}")
    print(f"IOF                 : R$ {IOF}")
    print(f"IR                  : R$ {IR}")
    print(f"Total impostos      : R$ {total_imposto}")
    print("-------------------------------------")
    print(f"Rendimento Líquido  : R$ {}")
    print(f"Rendiemnto Líquido  :    {}%")
    print("-------------------------------------")
    print(f"Valor total a sacar : R$ {}")
    print("-------------------------------------")
    print(f"Inflação do Período :    {}%")
    print(f"Ganho Real          : R$ {}")
    print("-------------------------------------")


def calcular_rendimento_bruto(valor_investido, taxa_rendimento, tempo):
    montante = valor_investido*(1 + (taxa_rendimento)/100)**tempo
    return montante

def calcular_IOF(valor_ganho):
valor_IOF = valor_ganho * 0.05
return valor_IOF

def calcular_IR(valor_investido, aliquota):
    valor_IR = (valor_investido * aliquota)/100
    return valor_IR

main()