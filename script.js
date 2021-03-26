var DP = prompt("Qual a Distancia Percorrida")
//DP = distancia Percorrida
var valorEmDistancia = parseFloat(DP)

var TG = prompt("Tempo Gasto")
var ValorEmTempo= parseFloat(TG)
// TG = Tempo Gasto 

var VM = DP/TG 
var VM = VM.toFixed(2)
//VM = Velocidade Media
window.alert("Velocidade Media Percorrida é de Km/h =  "+VM)