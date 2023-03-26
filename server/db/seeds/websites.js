/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('websites').del()
  await knex('websites').insert([
    {id: 1, domain_name: 'google.com'},
    {id: 2, domain_name: 'yandex.ru'},
    {id: 3, domain_name: '1xbet.com'}
  ]);
};
