exports.up = (knex) => {   //.up para fazer alteração na tabela
    return knex.schema.createTable('Principal', function (table) {
        table.increments();
        table.integer('cadastroCliente_id', 10).notNullable().unsigned();
        table.foreign('cadastroCliente_id')
            .references('cadastroCliente.id')
            .onDelete('restrict')
            .onUpdate('cascade')
        
        table.integer('modeloAparelho_id', 10).notNullable().unsigned();
        table.foreign('modeloAparelho_id')
            .references('modeloAparelho.id')
            .onDelete('restrict')
            .onUpdate('cascade')
        
        table.integer('servico_id', 10).notNullable().unsigned();
        table.foreign('servico_id')
            .references('servico.id')
            .onDelete('restrict')
            .onUpdate('cascade')

        table.integer('observacao_id', 10).notNullable().unsigned();
        table.foreign('observacao_id')
            .references('observacao.id')
            .onDelete('restrict')
            .onUpdate('cascade')

        table.boolean('destaque').notNullable().defaultTo(false);

           // table.timestamps(true,true)
    })
};

exports.down = (knex) => knex.schema.dropTable('Principal') //.down para desfazer alteração na tabela