
exports.seed = function(knex, Promise) {
  return knex('albums').truncate()
    .then(function () {
      return knex('albums').insert([
        {id: 1, name: 'Debut', release_year: 1993},
        {id: 2, name: 'Post', release_year: 1995},
        {id: 3, name: 'Homogenic', release_year: 1997}
      ]);
    });
};
