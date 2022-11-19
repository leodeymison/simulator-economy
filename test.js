const database = [
    {
        parcelas: 1,
        myTaxa: 2.88,
        concorrenteTaxa: 4.5
    },
    {
        parcelas: 2,
        myTaxa: 2.90,
        concorrenteTaxa: 4.9
    }
]

function calc(price, quant){
    const escolha = database.filter(item => item.parcelas === quant)

    const concorrenteReturn = (price - ((price * escolha[0].concorrenteTaxa) / 100)).toFixed(2)
    const myReturn = (price - ((price * escolha[0].myTaxa) / 100)).toFixed(2)

    const economia = myReturn - concorrenteReturn

    return {
        concorrenteReturn, myReturn, economia
    }
}

console.log(calc(1000, 2))