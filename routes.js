const express = require("express")
const routes = express.Router()

const Login = require("./middlware/Login")

const ClienteController = require("./controllers/ClienteController")
const ModeloController = require("./controllers/ModeloController")
const ServicoController = require("./controllers/ServicoController")
const UsuarioController = require("./controllers/UsuarioController")
const PrincipalController = require("./controllers/PrincipalController")
const ObservacaoController = require("./controllers/ObservacaoController")
const DestaqueController = require("./controllers/DestaqueController")
const PesquisaController = require("./controllers/PesquisaController")
const EstatisticasController = require("./controllers/EstatisticaController")


routes.get("/cadastrocliente", Login, ClienteController.index)
    .post("/cadastrocliente", Login, ClienteController.store)

    .get("/modelocliente", ModeloController.index)
    .post("/modelocliente", ModeloController.store)
    
    .get("/servicocliente", ServicoController.index)
    .post("/servicocliente", ServicoController.store)
    
    .get("/observacao", ObservacaoController.index)
    .post("/observacao", ObservacaoController.store)

    .get("/usuarios",  UsuarioController.index)
    .post("/usuarios", UsuarioController.store)
    
    .post("/login", UsuarioController.login)
    
    .get("/principal",  PrincipalController.index)
    .put("/principal/:id", PrincipalController.update)
    .delete("/principal/:id", PrincipalController.delete)

    .get("/destaque",  DestaqueController.index)
    .get('/destaque/:id', DestaqueController.destaque)
    
    .get('/pesq/:pesq', PesquisaController.index)

    .get('/estatistica', EstatisticasController.index)




module.exports = routes