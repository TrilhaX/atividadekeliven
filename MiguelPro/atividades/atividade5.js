let idUnico = Symbol("chave1")
let idUnico2 = Symbol("chave2")
let produto = {
    [idUnico]: 123,
    [idUnico2]: 321
}

if(idUnico == idUnico2){
    console.log("Iguais")
    console.log(produto[idUnico] + '\n' + produto[idUnico2])
}else{
    console.log("Diferentes")
    console.log(produto[idUnico] + '\n' + produto[idUnico2])
}