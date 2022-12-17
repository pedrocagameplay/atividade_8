var quant=Number(prompt("quantos números serão inseridos?"))
var i=0
var total=0
while(i<quant) {
    total=total + Number(prompt("adicione um número"))
    i++
}
var media = total / quant
alert("a soma dos números é "+ total +", e a média deles é "+ media)

