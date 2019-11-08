const db = require('../data/db-config');

module.exports = {
  getProjects,
  addProject,
  getResources
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