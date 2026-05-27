//1. Crie uma função que receba dois números e retorne a multiplicação entre eles.
const multiplication = (a,b) => a*b;
console.log(multiplication(10,10));
//2. Faça uma função que receba um nome e exiba uma saudação personalizada
function saudacao(nome){
    switch(nome){
        case "Riper":
            return "Bom dia professor, tudo bem?";
        case "Mister":
            return "Morra mister, seu inutil";
        default:
            return `Olá, ${nome}`;
    }
    
   
}

console.log(saudacao("Mister"))

//fessô, eu fiz assim pra ser mais legal, peguei do chat não tá bom
