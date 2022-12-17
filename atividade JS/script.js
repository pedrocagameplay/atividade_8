let saldo = prompt("Quanto você tem na sua conta bancária?") * 1
let item = prompt("Quanto custa o próximo item que você vai comprar?") * 1
if (saldo>=item){
    alert("Compra realizada")
}
else if(saldo<item){
    alert("Saldo insuficiente")
}
else{
    alert("caracteres inválidos")
}