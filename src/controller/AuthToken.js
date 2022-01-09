const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secret
async function ValidaToken(req, res, next){
    //RECEBENDO O TOKEN DO GEADRES
    const Token = req.body.token
    
  try {
    const t = jwt.verify(Token, secret)
    console.log(t)
    req.body = {userStatus : true, mensagem : 'usuario valido.' }
    next()
  } catch (error) {
      res.status(401).json({userStatus : 'usuario não validado'})
      console.log('erro', error)
  }
}

module.exports = ValidaToken