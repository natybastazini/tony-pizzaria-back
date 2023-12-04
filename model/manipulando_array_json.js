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

    pizzaria.forEach( nome => {
        arrayUsuario.push(informacoes.nome)        
    });

    return arrayUsuario
}

// const listarUsuario=function(){
//     let arrayUsuario=[]
//     let contador=0
//     while(contador<tonnyPizzaria.usuario.informacoes.length){
//         arrayUsuario.push(tonnyPizzaria.usuario.informacoes[contador].nome)
//         contador++
//     }
//     return arrayUsuario
// }

// console.log(listarUsuario())
console.log(listarNomeUsuario())