def media_ponderada(valores, pesos)

numerador = sum(v * p for v, p in zip(valores, pesos
  
  denominador = sum(pesos)
  

  media = numerador / denominador
  
  
  return media


valores = [50] 
pesos = [0.1,  0.2]
media = media_ponderada(valores, pesos) 

print("A média ponderada dos valores é:", media) 


 
 
 