//1. Faça um botão que, ao ser clicado, mude o texto de um parágrafo.
document.querySelector("button").addEventListener("click", function(trocarTexto){
    document.getElementById("paragrafo").textContent = "Novo texto";
})
//2. Capture o texto digitado em um input e mostre em tempo real abaixo dele.
document.querySelector("input").addEventListener("input",function(capturarTexto){
    document.getElementById("listener").textContent = capturarTexto.target.value;
})
//3. Ao passar o mouse sobre uma imagem, troque sua borda.
document.querySelector("img").addEventListener("mouseover", function(trocarBorda){
    document.getElementById("trollface").style.borderColor = "pink";
})