const db = require('../data/db-config');

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask
}

function getProjects(){
  return db('projects');
}

function getResources(){
  return db('resources');
}

function addProject(projectData){
  return db('projects')
          .insert(projectData);
}

function addResource(resourceData){
  return db('resources')
          .insert(resourceData);
}
/*
SELECT tasks.description as TaskDescription, 
projects.name as ProjectName, 
projects.description as ProjectDescription
FROM tasks
JOIN projects
WHERE tasks.project_id = projects.id
*/
function getTasks(){
  return db.select('*')
          .from('tasks')
          .leftJoin('projects', 'tasks.project_id', 'projects.id')
}

function addTask(taskData){
  return db('tasks')
          .insert(taskData);
}