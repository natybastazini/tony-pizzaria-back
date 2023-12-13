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


app.get('/usuarios', cors(), async(request, response, next) => {
    response.json(funcoes.getClientes())
    response.status(200)
})

app.get('/categoria', cors(), async(request, response, next) => {


    let categoria = require('./model/manipulando_array_json.js')
    let categorias = categoria.getCategorias()

    response.json(categorias)
    response.status(200)

})
