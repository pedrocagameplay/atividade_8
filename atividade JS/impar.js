var num1 = Number(prompt("insira um número"))
var num2 = Number(prompt("insira um número maior que o primeiro"))
var resultado = 0

 while(num1 <= num2) {
 if(num1 % 2 != 0){
 resultado = resultado + num1  
 }
 num1++
}

alert(resultado)
 
