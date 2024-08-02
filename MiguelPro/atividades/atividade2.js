let numero = "123.45"

if(!NaN){
    console.log(parseFloat(numero) + '\n' + parseInt(numero) + '\n' + parseInt(numero)/1000)
}else{
    console.log("Numero é NaN")
}