const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../database/index')
const jwt = require('jsonwebtoken')

require('dotenv').config()
const SECRET = process.env.secret

class Usuario extends Model {

    //A CLASSE MODEL NÃO PODE TER CONTRUTOR !!
    //IMPORTANTE, SE A CLASSE MODEL TIVER CONTRUTOR 
    //NÃO SERA POSSIVEL INSERIR NO BANCO DE DADOS
    async Criar(req,res)
        { 
            let {nome, senha, email} = req.body
        try {
            if(nome != '' && senha != ''){
                let resutl =  await Usuario.create({nome : nome, senha :senha , email : email})
                res.status(200).json({status : true, user : resutl })
                console.log('usuario criado....')
            }else{
                res.status(500).json({status : false})
                console.log('erro ao criar usuario')
            }
         
        } catch (error) {
            res.json({status : false})
            console.log('#############################################')
            console.log('erro ao INSERIR um usuario no banco' + error)
        }
    } 
    async   Buscar(req, res)
        { 
            let {nome, senha} = req.body
        try {
            var id = await Usuario.findOne(
            {
                where : {
                           nome : nome, 
                           senha : senha
                        }
             }
            )

            //verifica se o usuario existe no banco, caso não exista 
            //um json com valores null e enviado para o useEffect...
            if(id === null){
                console.log('Usuario não encontrado...O valor é : ' + id)
                res.status(400).json({ mensagem : 'erro, usuario não encontrado', Token : null, user : null, status : false})
            }else{
               // console.log('buscando usuario..' + id + email)
                console.log('Gerando token')
                //GERANDO UM TOKEN....
                let idUser = id.id
                const Token = jwt.sign({idUser}, SECRET, {expiresIn : 300})
                if(Token) res.json({Token : Token, id : idUser, status : true})
            }
        } catch (error) {
            console.log('Node : Erro | Não conseguiu gerar o Token ou não encontrou usuario' + error)
        }
    } 
    async buscarTodos(req, res){
        let userStatus = req.body.userStatus
        let mensagem = req.body.mensagem
        try {
            if(userStatus === false){
                console.info('buscar Todos : erro, token nao encontrado' + req.body.userStatus)
            }
            const usuarios = await Usuario.findAll()
            console.log(mensagem)
            return res.json(usuarios)
        } catch (error) {  
            console.log(error)
            res.json({erro : 'erro ao buscar todos os usuarios'})
        }
    
    }
    async Deletar()
        { 
        
        try {
            
        } catch (error) {
            console.log('#############################################')
            console.log('erro ao APAGAR um usuario no banco' + error)
        }
    } 
    async Motificar(props)
        { try {
            
        } catch (error) {
            console.log('#############################################')
            console.log('erro ao MODIFICAR um usuario no banco' + error)
        }
    } 
}
Usuario.init({
    id : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        autoIncrement : true, 
        primaryKey : true
    }, 
    nome : {
        type: DataTypes.STRING, 
        allowNull : false, 
    }, 
    senha : {
        type : DataTypes.STRING, 
        allowNull : false
    }, 
    email : {
        type : DataTypes.STRING, 
        allowNull : false
    }
}, {timestamps: false, sequelize, modelName:'usuarios'})

module.exports = new Usuario()