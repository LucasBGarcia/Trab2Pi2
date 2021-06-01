const { response } = require("express")
const knex = require("../database/dbConfig")

module.exports = {
    async index(req, res) {
        //const modelos = await knex("cadastrocliente").orderBy("id", "desc")
        const observacao = await knex("observacao")
                .join("cadastrocliente", "observacao.cadastrocliente_id", "=", "cadastrocliente.id")
                .orderBy("observacao.id", "desc")
        res.status(200).json(observacao)
    },

    async store(req, res) {
        const { observacao,  cadastroCliente_id } = req.body

        if (!observacao || !cadastroCliente_id) {
            res.status(400).json({ erro: "enviar: obervacao e cadastrocliente_id" })
            return
        }

        try {
            const novo = await knex("observacao").insert({ observacao, cadastroCliente_id})
            res.status(201).json({ id: novo[0] })
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
}