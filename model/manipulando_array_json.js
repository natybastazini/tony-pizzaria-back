/**********************************************************************
 * Objetivo: Trazer informações sobre a tonny pizzaria.
 * Data: 04/12/2023.
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 **********************************************************************/

var tonnyPizzaria = require('./tony_pizzaria.js')

const listarNomeUsuario = () => {
    let pizzaria = tonnyPizzaria.usuario.informacoes
    let arrayUsuario = []

    pizzaria.forEach( (nome) => {
        arrayUsuario.push(nome.nome)        
    });

    return arrayUsuario
}

const listarNomeProduto = () => {
    let pizzaria = tonnyPizzaria.produto.informacoes
    let arrayNome = []
    let arrayPreco = []
    let jsonProduto = {}

    pizzaria.forEach( (produto) =>{
        arrayNome.push(produto.nome)
        arrayPreco.push(produto.preco)
    } )

    jsonProduto.nome = arrayNome
    jsonProduto.preco = arrayPreco

    return jsonProduto
}

// console.log(listarNomeUsuario())
console.log(listarNomeProduto())