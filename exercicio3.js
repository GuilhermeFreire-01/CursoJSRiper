//1. Crie um programa que verifique se uma pessoa pode votar (idade >= 16).

let idade = 18;
if(idade>=16){
    console.log("pode votar");
}
else{
    console.log("Não pode votar");
}
//2. Use switch para exibir uma mensagem diferente para cada dia da semana.
let dia = "segunda-feira";

switch (dia){
    case 'segunda-feira': console.log("É segunda 😔");break;
    case 'terca-feira': console.log("AINDA É TERÇA");break;
    case 'quarta-feira': console.log("HJ É QUARTA FEIRAAAAAAAAAAAAAAA");break;
    case 'quinta-feira': console.log("Já tá quase, aguenta mais um pouco betinha");break;
    case 'sexta-feira': console.log("SEXTOOOOOOOOOOOUUUUUUUUU VAMOOOOOOO")
    case 'sabado': console.log("hoje eu vou pra farra só volto di madrugada...");break;
    case 'domingo': console.log("Já ki min sino a bebe, ja ki min sino a sofreeee...");break;
    default: console.log("vc fez o morrimento")
}

//meu visual code num fumfa fessô 😔