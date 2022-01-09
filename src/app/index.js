const express = require('express')
const cors = require('cors')
const routeUsuario = require('../routers/routerUsuario/usuario')
const routerEnderecos = require('../routers/routerEnderecos/endereco')
const Auth = require('../controller/AuthToken')

class App {
    constructor(){
        this.Apps = express()
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.Apps.use(express.json());
        this.Apps.use(cors())
        // this.App.use((req, res, next)=>{
        //     let Date = new Date.now();
        //     console.log('carregando middlwares......' + Date)
        //     res.json(Date)
        //     next()
        // })
    }
    routes(){
        //exemplo de route: 
        // this.App.get('/teste', (req, res)=>{
        //     console.log('essa é uma rota teste')
        // })
        this.Apps.use('/usuario', routeUsuario)
        this.Apps.use('/enderecos', routerEnderecos)
    }
}
//OBSERVAÇÃO : É E PRECISO IMPORTA A INSTANCIA DO EXPRESS ( APP ).
//O CONSTRUTOR CARREGAR AS ROTAS E O MIDDLEWARES E "PASSA" PARA A INTANCIA DO EXPRESS(). 
module.exports = new App().Apps
