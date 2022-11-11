//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let parcela = (valorDoProduto / 100 / quantidadeDoParcelamento)
let OqueResta = (quantidadeDoParcelamento - (valorPago / parcela))

console.log(`Restam ${OqueResta.toFixed(2)} parcelas de R$${parcela.toFixed(2)}`)