const router = require('express').Router()
const express = require('express')
const enderecos = require('../../model/Enderecos')


class RouterEnderecos {
    constructor(){
        this.rotas = router
        this.router()
    }

    router(){
        this.rotas.post('/cadastrar', enderecos.Criar)
        this.rotas.post('/buscar', enderecos.BuscarTodos)
        this.rotas.post('/apagar', enderecos.Deletar)
        this.rotas.post('/modificar',enderecos.Modificar)
    }

}

module.exports = new RouterEnderecos().rotas