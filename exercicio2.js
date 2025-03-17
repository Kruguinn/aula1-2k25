let custos = [800,1000,300,500];
let contador = 0;
let somatorio = 0;
while (contador < custos.length){
    somatorio = somatorio + custos[contador];
    contador = contador+1;
}
console.log("O seu custo mensal é R$" + somatorio);

let salario = [1200, 2000, 5400, 600];
let cont = 0;
let somaSalario = 0;
while (cont < salario.length){
    somaSalario = somaSalario + salario[cont];
    cont = cont+1;
}
console.log("O sálario mensal é R$" + somaSalario);

let diferenca = (somaSalario - somatorio);
console.log("A diferença é R$" + diferenca);