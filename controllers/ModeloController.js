const { response } = require("express")
const knex = require("../database/dbConfig")

module.exports = {
    async index(req, res) {
        //const modelos = await knex("cadastrocliente").orderBy("id", "desc")
        const modelos = await knex("modeloaparelho")
                .join("cadastrocliente", "modeloaparelho.cadastrocliente_id", "=", "cadastrocliente.id")
                .orderBy("modeloaparelho.id", "desc")
        res.status(200).json(modelos)
    },

    async store(req, res) {
        const { marca, modelo, cadastroCliente_id } = req.body

        if (!marca || !modelo || !cadastroCliente_id) {
            res.status(400).json({ erro: "enviar: marca, modelo e cadastrocliente_id" })
            return
        }

        try {
            const novo = await knex("modeloaparelho").insert({ marca, modelo, cadastroCliente_id})
            res.status(201).json({ id: novo[0] })
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
}