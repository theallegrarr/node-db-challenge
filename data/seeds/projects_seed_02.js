
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { 
          notes: 'Find your Boat', 
          task_description: 'Find a boat to set sail', 
          project_id: 1,
        },
        { 
          notes: 'Find the wind', 
          task_description: 'The Wind must blow south', 
          project_id: 1,
        },
        { 
          notes: '', 
          task_description: 'Find Edward Teach', 
          project_id: 2,
        },
        { 
          notes: 'Leave for skeleton Island', 
          task_description: 'Find course to skeleton island', 
          project_id: 2,
        },
        { 
          notes: 'Find a spacecraft', 
          task_description: 'Find a spacecraft', 
          project_id: 3,
        }
      ]);
    });
};
