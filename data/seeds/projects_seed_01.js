
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { 
          name: 'Embark on the Odyssey', 
          description: 'Meet Odysseus on the Island', 
          completed: true,
        },
        { 
          name: 'Liberate the slaves', 
          description: `Join Flint's war`, 
          completed: false,
        },
        { 
          name: 'Reach tatooine', 
          description: `Find the fictional planet`, 
          completed: false,
        }
      ]);
    });
};
