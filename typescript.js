var Database = [
    {
        parcelas: 1,
        myTaxa: 2.88,
        concorrenteTaxa: 4.5
    },
    {
        parcelas: 2,
        myTaxa: 2.9,
        concorrenteTaxa: 4.9
    },
];
function Calc(price, quant) {
    var escolha = Database.filter(function (item) { return item.parcelas === quant; })[0];
    var concorrenteReturn = parseFloat((price - (price * escolha.concorrenteTaxa) / 100).toFixed(2));
    var myReturn = parseFloat((price - (price * escolha.myTaxa) / 100).toFixed(2));
    var economia = myReturn - concorrenteReturn;
    return {
        concorrenteReturn: concorrenteReturn,
        myReturn: myReturn,
        economia: economia
    };
}
console.log(Calc(1000, 2));
