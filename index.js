
console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('       por Héllyda Cavalcanti        ')
console.log('--------------------------------------')

const produtos = require('./database')

const read = require('readline-sync')

const carrinho = []

produtos.sort((a,b) => a.preco - b.preco)

console.table(produtos)

console.log('--------------------------------------')

const verProdutos = read.question('Você deseja adicionar algum produto por categoria? S/N')
    if (verProdutos.toLocaleUpperCase() === 'S'){
        console.log('--------------------------------------')
        console.log('Essas são as categorias disponíveis:')
        console.log('alimento', 'informática', 'casa', 'higiene', 'bebida')
        console.log('--------------------------------------')

    const selectCategoria = read.question('Você está procurando produtos de qual categoria?')
    const categorias = produtos.filter(item => item.categoria === selectCategoria)
    console.log(categorias)
    } else { 
    (verProdutos.toLocaleUpperCase() !== 'S')
    console.log('Esses são os produtos disponíveis:')
    console.table(produtos)
}

class Pedido {
    constructor(array){
        this.product = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}

const compras = () => {
    productId = parseInt(read.question('Qual o ID do produto?'))

    for (i = 0; i < 1000; i++){
        findId = produtos.find(item => item.id == productId)
        if (findId){
            break
        }else{
            productId = parseInt(read.question('Digite ID válido.'))
        }
    }

quantidadeItem = parseInt(read.question('Digite a quantidade desejada:'))
for (i-0; i<1000; i++){
    if(quantidadeItem > 0){
        break 
    }else{
        quantidadeItem = parseInt(read.question('Digite uma quantidade válida:'))
    }
}

    const produtosCarrinho = {...findId, quantidade: quantidadeItem}
    carrinho.push(produtosCarrinho)
 

    const continueComprando = read.question('Deseja continuar comprando? S/N')
    const continueComprandoFormato = continueComprando.toLowerCase()
    if (continueComprandoFormato === 'n'){
           cupom = parseInt(read.question('Digite o valor do desconto:'))
       }  else {
        compras()
    }
    for (i=0; i<1000; i++){
        if(cupom > 15 || cupom < 0){
        cupom = parseInt(read.question('Cupom inválido. Tente novamente.'))
        } else{
        break  
        }
    }
}

compras()
class Order {
    constructor(carrinho){
        this.newProducts = carrinho
        this.subTotal = 0
    }
    calcularSubTotal(){
        this.subTotal = this.newProducts.reduce((acumulador,item) => acumulador +(item.preco * item.quantidade), 0)
    } 
}

const order = new Order(carrinho)
console.table(order.newProducts)
order.calcularSubTotal()
console.log(`Valor do pedido $ ${order.subTotal.toFixed(2)}.`)
const desconto = order.subTotal * (cupom/100)
console.log(`Valor do desconto $ ${desconto.toFixed(2)}.`)
console.log('--------------------------------------')
const total = order.subTotal - desconto
console.log(`Valor total $ ${total.toFixed(2)}.`)
console.log('--------------------------------------')
console.log('Obrigada e volte sempre se você é Fora Bolsonaro')

let dataAtual = new Date()
let dia = dataAtual.getDate()
let mes = (dataAtual.getMonth()+1)
let ano = dataAtual.getFullYear()
let horas = dataAtual.getHours()
let minutos = dataAtual.getMinutes()

const hoje = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
const dataHoje = hoje.toLocaleDateString('pt-BR', options)

console.log(dataHoje + '. ' + horas + ':' + minutos)