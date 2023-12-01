/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {movie_ID: 1, title: 'Mean Girls', userAdded: 'false', watched: 'false'},
    {movie_ID: 2, title: 'Hackers', userAdded: 'false', watched: 'false' },
    {movie_ID: 3, title: 'The Grey', userAdded: 'false', watched: 'false'},
    {movie_ID: 4, title: 'Sunshine', userAdded: 'false', watched: 'false'},
    {movie_ID: 5, title: 'Ex Machina', userAdded: 'false', watched: 'false'},
    {movie_ID: 6, title: 'Ex Girls', userAdded: 'false', watched: 'false'},
  ]);
};
