exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Principal').del()
    .then(function () {
      // Inserts seed entries
      return knex('Principal').insert([
        {cadastroCliente_id: 1, modeloAparelho_id: 1, servico_id: 1, observacao_id: 1, destaque: true},
        {cadastroCliente_id: 2, modeloAparelho_id: 2, servico_id: 2, observacao_id: 2, destaque: false},
        {cadastroCliente_id: 3, modeloAparelho_id: 3, servico_id: 3, observacao_id: 3, destaque: false}
      ]);
    });
};