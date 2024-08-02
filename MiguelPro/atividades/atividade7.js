let carro = {
    marca: "Honda",
    modelo: "civic",
    ano: 2007,
    detalhes() {
        console.log("Marca: " + this.marca + '\n' + "Modelo: " + this.modelo + '\n' + "Ano: " + this.ano);
    }
};

carro.detalhes()