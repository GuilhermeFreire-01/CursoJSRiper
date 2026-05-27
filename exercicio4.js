//1. Use um laço for para exibir os números de 1 a 10.
for (let i = 1; i<= 10; i++){
    console.log("Número:", i);
}
//2. Use while para somar números de 1 a 5.
let i = 1;
let soma = 0;
while (i <= 5) {
    soma = soma+i;
    i++
    console.log(`Soma: ${soma}`);
    
}
//3. Crie um do...while que peça uma senha até que seja '1234'.
senha = 0;
do{
    senha++
    console.log(senha)
}  while(senha <1234);
