
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('completed').defaultTo('false');
  }).createTable('tasks', table => {
    table.increments();
    table.string('description').notNullable();
    table.string('notes').defaultTo('none provided');
    table.integer('project_id').references('id').inTable('projects');
  }).createTable('resources', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').defaultTo('none provided');
  }).createTable('projects_resources', table => {
    table.increments();
    table.integer('project_id').notNullable().references('id').inTable('projects');
    table.integer('resource_id').notNullable().references('id').inTable('resources');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects_resources')
                    .dropTableIfExists('tasks')
                    .dropTableIfExists('resources')
                    .dropTableIfExists('projects');
};
