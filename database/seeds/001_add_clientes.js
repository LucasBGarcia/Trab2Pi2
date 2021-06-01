
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cadastroCliente').del()
    .then(function () {
      // Inserts seed entries
      return knex('cadastroCliente').insert([
        {nome: 'Lucas Garcia', numero: 984292062, foto: 'https://http2.mlstatic.com/D_NQ_NP_783387-MLB44143282171_112020-O.jpg'},
        {nome:  'Bruna Holz', numero: 984292456, foto: 'https://img.olx.com.br/images/96/968081911532958.jpg'},
        {nome: 'Mae', numero: 984292068, foto:'https://t1.ea.ltmcdn.com/pt/razas/7/3/3/img_337_american-bully_0_orig.jpg'}
      ]);
    });
};
