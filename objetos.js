// OBJETOS //
let times=[
    {
        nome: "Magnus Futsal",
        goleiro: "Leandro Filho",
        AlaDireita: "Leandro Lino",
        AlaEsquerdo: "Dieguinho",
        pivo: "Leozin",
        fixo: "Rodrigo Capita",
        tecnico: "Ricardinho",
        vitorias: 1,
        derrotas: 0,
    },


    {
        nome: "Seleção Brasileira",
        goleiro: "Willian",
        AlaDireita: "Leandro Lino",
        AlaEsquerdo: "Arthur",
        pivo: "Pito",
        fixo: "Neguinho",
        tecnico: "Marquinhos Xavier",
        vitorias: 7,
        derrotas: 0,
    },


    {
        nome: "Pato Futsal",
        goleiro: "Djony",
        AlaDireita: "Ian",
        AlaEsquerdo: "Duduzinho",
        pivo: "Ton",
        fixo: "Gleidson",
        tecnico: "Betinho",
        vitorias: 0,
        derrotas: 0,
    },


    {
        nome: "Marreco",
        goleiro: "Juba",
        AlaDireita: "Canhoto",
        AlaEsquerdo: "Ligeiro",
        pivo: "Fabinho",
        fixo: "Nascimento",
        tecnico: "Banana",
        vitorias: 0,
        derrotas: 0,
    },


    {
        nome: "Atlântico",
        goleiro: "Ryn",
        AlaDireita: "PL",
        AlaEsquerdo: "Salah",
        pivo: "Elenilson",
        fixo: "Erick",
        tecnico: "Paulinho Sananduva",
        vitorias: 0,
        derrotas: 0,
    }
];

function verTimes(){
    times.forEach((time)=>{
        console.log (time.nome + "-" + time.goleiro + "(goleiro), " + time.AlaDireito + "(Alá Direito), " + time.AlaEsquerda + "(Alá Esquerda), " + time.fixo + "(fixo), " + time.pivo + "(Pivô), " + time.tecnico + "(Técnico)", + time.vitorias + "(Vitórias), " + time.derrotas + "(Derrotas). ")
    });
}
verTimes();
