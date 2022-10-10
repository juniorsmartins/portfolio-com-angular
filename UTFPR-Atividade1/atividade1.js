function startPage() {
    console.log("Bem-vindo!")
}
startPage();

var mostrar_resultado = document.querySelector("[data-mostrarResultado]");

document.querySelector("#somar-valores").addEventListener("click", somar1ate100);

function somar1ate100() {

    console.log('---- calculando... ----');
    var total = 0;
    for (let contador = 1; contador <= 100; contador++) {
        total += contador;
        console.log(total);
    }   
    console.log('---- concluído ----');

    mostrarSomaNaJanelinha(total);
    mostrarSomaNaTela(total);
}

function mostrarSomaNaJanelinha(valor) {
    window.alert(valor);
}

function mostrarSomaNaTela(valor) {
    this.mostrar_resultado.value = parseInt(valor);
}
