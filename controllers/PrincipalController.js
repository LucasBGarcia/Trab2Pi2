const { response } = require("express")
const knex = require("../database/dbConfig")

module.exports = {
    async index(req, res) {
        //const principais = await knex("principal").orderBy("id", "desc")

        const principais = await knex("principal")
            .innerJoin("cadastrocliente", "principal.cadastrocliente_id", "=", "cadastrocliente.id")
            .innerJoin("servico", "principal.cadastrocliente_id", "=", "servico.id")
            .innerJoin("modeloAparelho", "principal.cadastrocliente_id", "=", "modeloAparelho.id")
            .innerJoin("observacao", "principal.cadastrocliente_id", "=", "observacao.id")
            .orderBy("principal.id", "desc")

        res.status(200).json(principais)

    },

    async update(req, res) {

        const { id } = req.params
        const { nome, numero } = req.body
        const { servico, preco } = req.body

        try {
            novoCliente = await knex('cadastrocliente').update({ nome, numero }).where({ id })
            novoServico = await knex('servico').update({ servico, preco }).where({ id })
            res.status(201).json()
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    },

    async delete(req, res) {
        const { id } = req.params
        try {
            await knex('cadastrocliente').del().where({ id })
            await knex('servico').del().where({ id })
            await knex('observacao').del().where({ id })
            await knex('modeloaparelho').del().where({ id })
            res.status(201).json("Cliente deletado")
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }

    }

}