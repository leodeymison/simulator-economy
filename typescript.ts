type DatabaseType = {
  parcelas: number;
  myTaxa: number;
  concorrenteTaxa: number;
};
type CalcResponse = {
  concorrenteReturn: number;
  myReturn: number;
  economia: number;
};

const Database: Array<DatabaseType> = [
  {
    parcelas: 1,
    myTaxa: 2.88,
    concorrenteTaxa: 4.5,
  },
  {
    parcelas: 2,
    myTaxa: 2.9,
    concorrenteTaxa: 4.9,
  },
];

function Calc(price: number, quant: number): CalcResponse {
  const escolha: DatabaseType = Database.filter(
    (item) => item.parcelas === quant
  )[0];

  const concorrenteReturn: number = parseFloat(
    (price - (price * escolha.concorrenteTaxa) / 100).toFixed(2)
  );
  const myReturn: number = parseFloat(
    (price - (price * escolha.myTaxa) / 100).toFixed(2)
  );

  const economia: number = myReturn - concorrenteReturn;

  return {
    concorrenteReturn,
    myReturn,
    economia,
  };
}

console.log(Calc(1000, 2));
