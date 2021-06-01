const knex = require('../database/dbConfig')

module.exports = {
    async index(req, res) {

        try {
            //const consulta = await knex('principal')
            const consulta = await knex("principal")
            .innerJoin("cadastrocliente", "principal.cadastrocliente_id", "=", "cadastrocliente.id")
            .innerJoin("servico", "principal.cadastrocliente_id", "=", "servico.id")
            .innerJoin("modeloAparelho", "principal.cadastrocliente_id", "=", "modeloAparelho.id")
            .innerJoin("observacao", "principal.cadastrocliente_id", "=", "observacao.id")
            .orderBy("principal.id", "desc")
                .count({ principal: '*' })
                .min({ menor: 'preco' })
                .max({ maior: 'preco' })
                .avg({ media: 'preco' })
            res.status(200).json({
                principal: consulta[0].principal,
                menor: consulta[0].menor,
                maior: consulta[0].maior,
                media: Number(consulta[0].media).toFixed(0)
            })
        } catch (error) {
            res.status(400).json({ msg: error.message })
        }


    }
}