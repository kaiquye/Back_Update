const {Model, Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../database/index')


class Endereco extends Model{
    //A CLASS MODEL NÃO PODE TER CONSTRUTOR
    async Criar(req, res){
        let {cep, bairro, complemento, Logradouro, localidade, UF} = req.body
        try {
            let endereco = await Endereco.create({cep : cep, bairro : bairro, complemento : complemento, Logradouro : Logradouro, localidade : localidade, UF : UF})
            res.status(200).json({status : true, endereco : endereco, mensagem : "Endereco cadastrado com susseco" })
        } catch (error) {
            console.log('erro ao cadastrar um enderco' + error)
        }
    }
    async BuscarTodos(req, res){
        try {
            let enderecos = await Endereco.findAll()
            console.log('buscando usuarios')
            res.json(enderecos)
        } catch (error) {
            console.log('erro ao buscar um enderco'+error)
        }
    }
    async Deletar(req, res){

        let {cep} = req.body;
        console.log(req)
        console.log(cep)
        try {
            const del = await Endereco.destroy({
                where : {
                    cep : cep
                }
            })
            if(del == 0){
               return res.status(401).json({mensagem : 'Erro, nenhum enderecos deletado ', del})
            }
            res.status(200).json({mensagem : 'numeros de enderecos apagados '  , del })
            console.log(del)
        } catch (error) {
            console.log('Erro ao apagar um endereco' + error)
        }
    }
    async Modificar(req, res){

        const {cep, bairro, complemento, logradouro, localidade, UF} = req.body.endereco
        try {
            let endereco = await Endereco.update({cep : cep, bairro: bairro, complemento: complemento, logradouro : logradouro, localidade:localidade, UF:UF}, {
                where : {
                    cep : cep
                }
            })
            console.log(endereco)
        } catch (error) {
            console.log(error)
        }
    }
}

Endereco.init({
    id : {
        type : DataTypes.INTEGER, 
        allowNull : false, 
        autoIncrement : true, 
        primaryKey : true
    }, 
    cep : {
        type : DataTypes.STRING, 
        allowNull : false
    },
    bairro : {
        type : DataTypes.STRING, 
        allowNull : false
    }, 
    complemento : {
        type : DataTypes.STRING, 
        allowNull : true, 
    }, 
    DDD : {
        type : DataTypes.STRING, 
        allowNull : true, 
    }, 
    localidade : {
        type : DataTypes.STRING, 
        allowNull : false
    }, 
    Logradouro : {
        type : DataTypes.STRING,
        allowNull: false
    },
    UF : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {timestamps : false, sequelize, modelName : 'enderecos'})


module.exports = new Endereco()
