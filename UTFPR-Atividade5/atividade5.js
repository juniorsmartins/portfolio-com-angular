const tipoGasolina = 'GASOLINA';
const tipoEtanol = 'ETANOL';
const parametroDaVantagem = 0.7;

class Posto {

    constructor(nome, gasolina, etanol) {
        this._nome = nome;
        this._gasolina = gasolina;
        this._etanol = etanol;
    }

    sugereCombustivel() {
        var sugestaoDeCombustivel;
        let porcentagem = this._etanol._preco / this._gasolina._preco;

        if(porcentagem < parametroDaVantagem) {
            sugestaoDeCombustivel = tipoEtanol;
        } else {
            sugestaoDeCombustivel = tipoGasolina;
        }

        return `\n TABELA DE PREÇOS DE COMBUSTÍVEIS \n 
            Gasolina: ${this._gasolina._preco} \n 
            Etanol: ${this._etanol._preco} \n
            Porcentagem: ${porcentagem} \n
            Combustível vantajoso: ${sugestaoDeCombustivel} \n`;
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

    constructor(tipo, preco = 0.0) {
        this._tipo = tipo;
        this._preco = preco;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    get preco() {
        return this._preco;
    }

    set preco(preco) {
        this._preco = preco;
    }
}

function startMain() {

    var gasolina = new Combustivel(tipoGasolina, 6.799);
    var etanol = new Combustivel(tipoEtanol, 5.299);
    var posto = new Posto('Posto Ipiranga', gasolina, etanol);

    console.log(posto.sugereCombustivel());
}

startMain();
