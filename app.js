/**********************************************************************
 * Objetivo: Trazer informações sobre a tonny pizzaria.
 * Data: 04/12/2023.
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 **********************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request } = require('http')

const app = express()

app.use((request, response, next) => {
    // Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')
    // Configura os métodos que poderão ser utilizdos na API (GET, POST, PUT, e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})

/* Endpoint nome usuário */

// app.get('/informacoes/nome', cors(), async function(request, response, next){
//         let controleUsuarios = require('./model/manipulando_array_json');
//         let dadosPizzaria = controleUsuarios.listarNomeUsuario();
    
//         response.json(dadosPizzaria);
//         response.status(200);
// })

/* Endpoint nome produto */

// app.get('/informacoes/nome', cors(), async function(request, response, next){
//     let controleUsuarios = require('./model/manipulando_array_json');
//     let dadosPizzaria = controleUsuarios.listarNomeProduto();

//     response.json(dadosPizzaria);
//     response.status(200);
// })

/* Endpoint dados usuário */

// app.get('/informacoes/nome', cors(), async function(request, response, next){
//     let controleUsuarios = require('./model/manipulando_array_json');
//     let dadosPizzaria = controleUsuarios.listarDadosUsuario();

//     response.json(dadosPizzaria);
//     response.status(200);
// })

/* Endpoint categorias */

app.get('/informacoes/nome', cors(), async function(request, response, next){
    let controleUsuarios = require('./model/manipulando_array_json');
    let dadosPizzaria = controleUsuarios.listarCategorias();

    response.json(dadosPizzaria);
    response.status(200);
})
    

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições!!!');
})