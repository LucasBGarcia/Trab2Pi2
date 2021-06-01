exports.up = (knex) => {   //.up para fazer alteração na tabela
    return knex.schema.createTable('cadastroCliente', (table) => {
        table.increments();
        table.string('nome', 60).notNullable();
        table.integer('numero', 10).notNullable();
        table.string('foto').notNullable();
        //table.boolean('destaque').notNullable().defaultTo(false);

        table.timestamps(true,true)
    })
};

exports.down = (knex) => knex.schema.dropTable('cadastroCliente') //.down para desfazer alteração na tabela