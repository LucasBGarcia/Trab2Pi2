const { response } = require("express")
const knex = require("../database/dbConfig")


module.exports = {


    async index(req, res) {
        //const clientes = await knex("cadastrocliente").orderBy("id", "desc")
        const clientes = await knex("cadastrocliente").orderBy("id", "desc")
        res.status(200).json(clientes)
    },

    async store(req, res) {
        const { nome, numero, foto } = req.body
        const { marca, modelo } = req.body
        const { servico, preco } = req.body
        const { observacao} = req.body

        if (!nome || !numero || !foto) {
            res.status(400).json({ erro: "enviar: nome, numero e foto" })
            return
        }

        if (!marca || !modelo) {
            res.status(400).json({ erro: "enviar: marca, modelo e cadastrocliente_id" })
            return
        }

        if (!observacao) {
            res.status(400).json({ erro: "enviar: obervacao e cadastrocliente_id" })
            return
        }

        if (!servico || !preco ) {
            res.status(400).json({ erro: "enviar: servico, preco e cadastrocliente_id" })
            return
        }

        try {
            const novo = await knex("cadastrocliente").insert({ nome, numero, foto })
            const novoModelo = await knex("servico").insert({ servico, preco,cadastroCliente_id: novo[0] })
            const novoServico = await knex("modeloAparelho").insert({ marca, modelo,cadastroCliente_id:novo[0]  })
            const novoObservacao = await knex("observacao").insert({ observacao,cadastroCliente_id:novo[0] }) 
            const novoPrincipal = await knex("principal").insert({ cadastroCliente_id: novo[0],
                                        modeloAparelho_id: novo[0], 
                                        servico_id: novo[0], 
                                        observacao_id: novo[0]})
            res.status(201).json({ id: novo[0] })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}