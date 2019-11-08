
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { 
          notes: 'Find your Boat', 
          description: 'Find a boat to set sail', 
          project_id: 1,
        },
        { 
          notes: 'Find the wind', 
          description: 'The Wind must blow south', 
          project_id: 1,
        },
        { 
          notes: '', 
          description: 'Find Edward Teach', 
          project_id: 2,
        },
        { 
          notes: 'Leave for skeleton Island', 
          description: 'Find course to skeleton island', 
          project_id: 2,
        },
        { 
          notes: 'Find a spacecraft', 
          description: 'Find a spacecraft', 
          project_id: 3,
        }
      ]);
    });
};
