const { response } = require("express")
const knex = require("../database/dbConfig")

module.exports = {
    async index(req, res) {
        //const modelos = await knex("cadastrocliente").orderBy("id", "desc")
        const servico = await knex("servico")
                .join("cadastrocliente", "servico.cadastrocliente_id", "=", "cadastrocliente.id")
                .orderBy("servico.id", "desc")
        res.status(200).json(servico)
    },

    async store(req, res) {
        const { servico, preco, cadastroCliente_id } = req.body

        if (!servico || !preco || !cadastroCliente_id) {
            res.status(400).json({ erro: "enviar: servico, preco e cadastrocliente_id" })
            return
        }

        try {
            const novo = await knex("servico").insert({ servico, preco, cadastroCliente_id})
            res.status(201).json({ id: novo[0] })
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
}