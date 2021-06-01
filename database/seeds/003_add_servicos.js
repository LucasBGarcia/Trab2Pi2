
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('servico').del()
    .then(function () {
      // Inserts seed entries
      return knex('servico').insert([
        {servico: 'vidro', preco: 150, cadastroCliente_id: 1},
        {servico: 'tela completa', preco: 300, cadastroCliente_id: 2},
        {servico: 'vidro', preco: 220 , cadastroCliente_id: 3}
      ]);
    });
};
