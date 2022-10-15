const tipoGasolina = 'GASOLINA';
const tipoEtanol = 'ETANOL';
const parametroDaVantagem = 0.7;

class Posto {

    private nome: string;
    private gasolina: Combustivel;
    private etanol: Combustivel;

    constructor(nome: string, gasolina: Combustivel, etanol: Combustivel) {
        this.nome = nome;
        this.gasolina = gasolina;
        this.etanol = etanol;
    }

    sugereCombustivel() {
        var sugestaoDeCombustivel: String;
        let porcentagem: number = this.etanol.preco / this.gasolina.preco;

        if(porcentagem < parametroDaVantagem) {
            sugestaoDeCombustivel = tipoEtanol;
        } else {
            sugestaoDeCombustivel = tipoGasolina;
        }

        return `\n TABELA DE PREÇOS DE COMBUSTÍVEIS \n 
            Nome do posto: ${this.nome} \n
            Gasolina: ${this.gasolina.preco} \n 
            Etanol: ${this.etanol.preco} \n
            Porcentagem: ${porcentagem} \n
            Combustível vantajoso: ${sugestaoDeCombustivel} \n`;
    }
}

class Combustivel {

    public tipo: string;
    public preco: number;

    constructor(tipo: string, preco: number) {
        this.tipo = tipo;
        this.preco = preco;
    }
}

function startMain() {

    var gasolina = new Combustivel(tipoGasolina, 6.799);
    var etanol = new Combustivel(tipoEtanol, 4.299);
    var posto = new Posto('Posto Ipiranga', gasolina, etanol);

    console.log(posto.sugereCombustivel());
}

startMain();
