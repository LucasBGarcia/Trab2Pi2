exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('observacao').del()
    .then(function () {
      // Inserts seed entries
      return knex('observacao').insert([
        {observacao: 'tampa traseira quebrada',  cadastroCliente_id: 1},
        {observacao: '-----', cadastroCliente_id: 2},
        {observacao: 'limpar camera',  cadastroCliente_id: 3}
      ]);
    });
};