
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('modeloAparelho').del()
    .then(function () {
      // Inserts seed entries
      return knex('modeloAparelho').insert([
        {marca: 'Motorola', modelo: 'Moto g7', cadastroCliente_id: 1},
        {marca: 'LG', modelo: 'k12', cadastroCliente_id: 2},
        {marca: 'Motorola', modelo: 'Moto One', cadastroCliente_id: 3}
      ]);
    });
};
