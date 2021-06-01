const knex = require('../database/dbConfig')

module.exports = {
    async index(req, res) {
        const { pesq } = req.params

        try {
            //const pesquisa = await knex('cadastrocliente').where('nome', 'like', `%${pesq}%`);
            const pesquisa = await knex("principal").where('nome', 'like', `%${pesq}%`)
            .innerJoin("cadastrocliente", "principal.cadastrocliente_id", "=", "cadastrocliente.id")
            .innerJoin("servico", "principal.cadastrocliente_id", "=", "servico.id")
            .innerJoin("modeloAparelho", "principal.cadastrocliente_id", "=", "modeloAparelho.id")
            .innerJoin("observacao", "principal.cadastrocliente_id", "=", "observacao.id")
            .orderBy("principal.id", "desc")
            res.status(200).json(pesquisa)
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }
    }
}