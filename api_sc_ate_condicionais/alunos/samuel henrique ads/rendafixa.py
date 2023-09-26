import datetime

def rendimento_bruto(valor, taxa, data_invest, data_resgate)

  data_invest = datetime.datetime.strptime(data_invest, "%m/%Y")
  data_resgate = datetime.datetime.strptime(data_resgate, "%m/%Y")
  
  meses = (data_resgate.year - data_invest.year) * 12 + (data_resgate.month - data_invest.month)
  
  rend_bruto = valor * (1 + taxa / 100) ** meses
  
  return rend_bruto


def imposto_renda(rend_bruto, data_invest, data_resgate):
  
  data_invest = datetime.datetime.strptime(data_invest, "%m/%Y")
  data_resgate = datetime.datetime.strptime(data_resgate, "%m/%Y")
  
  dias = (data_resgate - data_invest).days
  
  aliquotas = [0.225, 0.2, 0.175, 0.15]
  
  limites = [180, 360, 720]
  
  aliquota = aliquotas[-1]
  
  for i in range(len(limites) -1, -1, -1):
    
    if dias <= limites[i]:
      aliquota = aliquotas[i]
    else:
      
      break
  
  imp_renda = rend_bruto * aliquota
  
  
  return imp_renda


def iof(rend_bruto, data_invest, data_resgate):

  data_invest = datetime.datetime.strptime(data_invest, "%m/%Y")
  data_resgate = datetime.datetime.strptime(data_resgate, "%m/%Y")

  dias = (data_resgate - data_invest).days
  
  dias = min(dias, 30)
  
  imp_iof = rend_bruto * dias * 0.05
  
  return imp_iof


valor = 1000 
taxa = 1 
data_invest = "10/2021" 
data_resgate = "11/2021" 
inflacao = 0.5 


rend_bruto = rendimento_bruto(valor, taxa, data_invest, data_resgate *200
imp_renda = imposto_renda(rend_bruto, data_invest, data_resgate) :* 100
