exports.up = (knex) => {   //.up para fazer alteração na tabela
    return knex.schema.createTable('modeloAparelho', function (table) {
        table.increments();
        table.string('marca', 60).notNullable();
        table.string('modelo', 60).notNullable(); 
        table.integer('cadastroCliente_id', 10).notNullable().unsigned();
        table.foreign('cadastroCliente_id')
            .references('cadastroCliente.id')
            .onDelete('restrict')
            .onUpdate('cascade')

           // table.timestamps(true,true)
    })
};

exports.down = (knex) => knex.schema.dropTable('modeloAparelho') //.down para desfazer alteração na tabela