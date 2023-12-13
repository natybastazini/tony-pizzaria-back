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

const listarDadosUsuario = () => {
    let pizzaria = tonnyPizzaria.usuario.informacoes
    let arrayUsuario = []

    pizzaria.forEach( (dados) => {
        arrayUsuario.push(dados.nome)  
        arrayUsuario.push(dados.email)
        arrayUsuario.push(dados.telefone)
        arrayUsuario.push(dados.endereco)      
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

const listarCategorias = () => {
    let categorias = tonnyPizzaria.categoria.informacoes
    let json = {}
    let array = []
    categorias.forEach((categoria) => {
        let objCategoria = {
            nome: categoria.nome
        }
        array.push(objCategoria)
    })
    json.categorias = array
    return json
}

// console.log(listarNomeUsuario())
// console.log(listarDadosUsuario())
// console.log(listarNomeProduto())
// console.log(listarCategorias())

