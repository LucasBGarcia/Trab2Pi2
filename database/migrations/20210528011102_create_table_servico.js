exports.up = (knex) => {   //.up para fazer alteração na tabela
    return knex.schema.createTable('servico', function (table) {
        table.increments();
        table.string('servico', 60).notNullable(); 
        table.decimal('preco', 9.2).notNullable();
        table.integer('cadastroCliente_id', 10).notNullable().unsigned();
        table.foreign('cadastroCliente_id')
            .references('cadastroCliente.id')
            .onDelete('restrict')
            .onUpdate('cascade')

           // table.timestamps(true,true)
    })
};

exports.down = (knex) => knex.schema.dropTable('servico') //.down para desfazer alteração na tabela
