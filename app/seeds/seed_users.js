/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {name: 'John Doe', email: 'john.doe@example.com'},
    {name: 'Jane Smith', email: 'jane.smith@example.com'},
    {name: 'Alice Johnson', email: 'alice.johnson@example.com'},
    {name: 'Bob Brown', email: 'bob.brown@example.com'},
    {name: 'Charlie Davis', email: 'charlie.davis@example.com'},
    {name: 'David Evans', email: 'david.evans@example.com'},
    {name: 'Eva Green', email: 'eva.green@example.com'},
    {name: 'Frank Harris', email: 'frank.harris@example.com'},
    {name: 'Grace Kim', email: 'grace.kim@example.com'},
    {name: 'Henry Lee', email: 'henry.lee@example.com'},
    {name: 'Isla Martin', email: 'isla.martin@example.com'},
    {name: 'Jack Nelson', email: 'jack.nelson@example.com'},
    {name: 'Karen Olson', email: 'karen.olson@example.com'},
    {name: 'Liam Parker', email: 'liam.parker@example.com'},
    {name: 'Mia Quinn', email: 'mia.quinn@example.com'},
    {name: 'Noah Roberts', email: 'noah.roberts@example.com'},
    {name: 'Olivia Scott', email: 'olivia.scott@example.com'},
    {name: 'Paul Turner', email: 'paul.turner@example.com'},
    {name: 'Quinn Walker', email: 'quinn.walker@example.com'},
    {name: 'Ruby Young', email: 'ruby.young@example.com'}
  ]);
};
