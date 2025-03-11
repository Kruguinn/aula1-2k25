const lanches= ["x-tudo", "x-bacon", "x-egg", "x-frango", "x-calabresa"];
const precos= [20, 14, 13, 13, 15];
const tamanho = lanches.length
let contador = 0 
while(contador< tamanho){
    console.log(lanches[contador] + " - R$" + precos[contador]);
    contador = contador + 1;
}