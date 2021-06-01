const knex = require('../database/dbConfig')

module.exports = {
    async index(req, res) {
        try {
           // const principal = await knex('principal').where('destaque', '=', 1)

            const destaques = await knex("principal").where('destaque', '=', 1)
            .innerJoin("cadastrocliente", "principal.cadastrocliente_id", "=", "cadastrocliente.id")
            .innerJoin("servico", "principal.cadastrocliente_id", "=", "servico.id")
            .innerJoin("modeloAparelho", "principal.cadastrocliente_id", "=", "modeloAparelho.id")
            .innerJoin("observacao", "principal.cadastrocliente_id", "=", "observacao.id")
            .orderBy("principal.id", "desc")
           // res.status(200).json(destaques)

            if (destaques.length >= 1) {
                res.status(200).json(destaques)
            } else {
                res.status(400).json("Não a clientes em destaques")
            }


        } catch (error) {
            res.status(400).json({ msg: error.message })
        }

    },

    
    async destaque(req, res) {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ erro: "Campos incompletos!" })
            return
        }
        try {
            const dest = await knex("principal").where({ id });
            if (dest[0].destaque) {

                novo = await knex('principal').where({ id }).update({ destaque: false });
                res.status(201).json({ msg: "cliente agora NÃO é mais destaque!!!" });

            } else {

                novo = await knex('principal').where({ id }).update({ destaque: true });
                res.status(201).json({ msg: "cliente agora é destaque!!!" });

            }

        } catch (error) {
            res.status(400).json({ erros: error.message });
        }

    }
    
}