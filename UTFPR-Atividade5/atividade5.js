function startPage() {
    console.log("Bem-vindo!")
}
startPage();

class Posto {
    nome: String;
    gasolina: String;
    etanol: String;

    constructor(nome, gasolina, etanol) {
        this._nome = nome;
        this._gasolina = gasolina;
        this._etanol = etanol;
    }

    sugereCombustivel() {

    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get gasolina() {
        return this._gasolina;
    }

    set gasolina(gasolina) {
        this._gasolina = gasolina;
    }

    get etanol() {
        return this._etanol;
    }

    set etanol(etanol) {
        this._etanol = etanol;
    }
}

class Combustivel {
    tipo: String;
    preco: Number;

    constructor(tipo, preco) {
        this._tipo = tipo;
        this._preco = preco;
    }
}





var botaoPegarValor = document.querySelector("#btnPegarValor");

botaoPegarValor.addEventListener("click", function(event) {
    event.preventDefault();

    let formulario = document.querySelector("#formulario-valor");
    console.log(formulario.valor.value);
    calcularNumeroDeNotasPorValor(formulario.valor.value);
})

function calcularNumeroDeNotasPorValor(valorDeSaque) {

    let umReal = 0;
    let doisReais = 0;
    let cincoReais = 0;
    let dezReais = 0;
    let vinteReais = 0;
    let cinquentaReais = 0;
    let cemReais = 0;

    while (valorDeSaque != null && valorDeSaque >= 1) {
        if (valorDeSaque >= 100) {
            valorDeSaque -= 100;
            cemReais++;
        } else if (valorDeSaque >= 50) {
            valorDeSaque -= 50;
            cinquentaReais++;
        } else if (valorDeSaque >= 20) {
            valorDeSaque -= 20;
            vinteReais++;
        } else if (valorDeSaque >= 10) {
            valorDeSaque -= 10;
            dezReais++;
        } else if (valorDeSaque >= 5) {
            valorDeSaque -= 5;
            cincoReais++;
        } else if (valorDeSaque >= 2) {
            valorDeSaque -= 2;
            doisReais++;
        } else if (valorDeSaque = 1) {
            valorDeSaque -= 1;
            umReal++;
        }
    }

    document.getElementById("um").innerHTML = "R$ 1,00: " + umReal;
    document.getElementById("dois").innerHTML = "R$ 2,00: " + doisReais;
    document.getElementById("cinco").innerHTML = "R$ 5,00: " + cincoReais;
    document.getElementById("dez").innerHTML = "R$ 10,00: " + dezReais;
    document.getElementById("vinte").innerHTML = "R$ 20,00: " + vinteReais;
    document.getElementById("cinquenta").innerHTML = "R$ 50,00: " + cinquentaReais;
    document.getElementById("cem").innerHTML = "R$ 100,00: " + cemReais;
}

