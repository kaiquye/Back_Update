const router = require('express').Router()
const modelUsuario = require('../../model/Usuario')
const Auth = require('../../controller/AuthToken')

// router.post('/cadastrar', modelUsuario.Criar)
// router.post('/deletar', modelUsuario.Deletar)
// router.post('/buscar', modelUsuario.Buscar)
// router.post('/modificar', modelUsuario.Motificar)

// module.exports = router;


class RouterUsuario {
    //CARREGAR AS ROTAS NO CONSTRUCTOR, ASSIM TODA VEZ QUE A CLASSE FOR INSTACIADA ELE E CARREGADO.
    constructor(){
        this.rotas = router;
        this.routers();
    }

    routers(){
        //ADICIONAR A VERIFICAO DO USUARIO NESTA PARTE
        this.rotas.post('/cadastrar', modelUsuario.Criar);
        this.rotas.post('/buscar', modelUsuario.Buscar);
        this.rotas.post('/deletar', modelUsuario.Deletar);
        this.rotas.post('/modificar', modelUsuario.Motificar);
        this.rotas.post('/buscartodos', Auth, modelUsuario.buscarTodos);
        this.rotas.post('/validarToken', Auth)
    }
}
//E PRECISO IMPORTA AS ROTAS.
module.exports = new RouterUsuario().rotas;

//nostas
//QUANDO EU PASSO A CLASS JA INSTANCIA PARA O OUTRO ARQUIVO, ELE AO SER CHAMADA JA EXECUTA TODOS AS FUNCÕES QUE ESTÃO NO 
//CONSTRUTOR
//POR ESSE MOTIVO E MAIS FACIL JA DEIXA AS ROTAS NO CONSTRUTOR, SO USAREMOS ELA.