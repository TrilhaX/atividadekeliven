var grandeNumero1 = BigInt("2094020940294204930294029403290")
var grandeNumero2 = BigInt("17841794717721418048198409")

let soma = grandeNumero1 + grandeNumero2
let subtração = grandeNumero1 - grandeNumero2
let mult = grandeNumero1 * grandeNumero2
let div = grandeNumero1/grandeNumero2

if(grandeNumero1 > grandeNumero2){
    console.log(soma + '\n' + subtração + '\n' + mult + '\n' + div + '\n' + "GrandeNumero1 é maior")
}else{
    console.log(soma + '\n' + subtração + '\n' + mult + '\n' + div + '\n' + "GrandeNumero2 é maior")
}