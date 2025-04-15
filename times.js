
let times=require("./dados.json");


function verTimes(){

}

function criarArquivo(){
    let dadosEmTexto = JSON.stringify(times);
    const fs = require("fs");
    fs.writeFileSync("dados.json", dadosEmTexto);
    console.log("Arquivo criado");
}

criarArquivo();

//criarArquivo();

verTimes();
