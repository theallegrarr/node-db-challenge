
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { 
          name: 'Ship', 
          description: 'Can be a spaceship or a Ship', 
        },
        { 
          name: 'Boat', 
          description: 'A longboat', 
        },
        { 
          name: 'Gun', 
          description: 'Can be a ray gun, rifle or pistol', 
        },
        { 
          name: 'Sword', 
          description: '', 
        },
        { 
          name: 'Sacrifice', 
          description: 'Needed by the gods', 
        }
      ]);
    });
};
