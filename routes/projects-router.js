const express = require('express');
const db = require('../data/db-config');
const helpers = require('../data/helpers');

const router = express.Router();

router.get('/', async (req,res) => {
  try {
    const projects = await helpers.getProjects();
    if(projects){
      res.status(200).json(projects);
    } else {
      res.status(200).json({ message: 'No Projects Found' });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: `internal error` })
  }
})

router.post('/', async (req,res) => {
  try {
    const newProject = {
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed ? 'true' : 'false'
    }

    const projects = await helpers.addProject(newProject);
    if(projects){
      res.status(201).json(`Project with ID ${projects} added`);
    } else {
      res.status(400).json({ message: 'Check Insertion Data' });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: `internal error` })
  }
})

router.get('/resources', async (req,res) => {
  try {
    const projects = await helpers.getResources();
    if(projects){
      res.status(200).json(projects);
    } else {
      res.status(200).json({ message: 'No Resources Found' });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: `internal error` })
  }
})

router.post('/resources', async (req,res) => {
  try {
    const newResource = {
      name: req.body.name,
      description: req.body.description,
    }

    const result = await helpers.addResource(newResource);
    if(result){
      res.status(201).json(`Resource with ID ${result} added`);
    } else {
      res.status(400).json({ message: 'Check Insertion Data' });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: `internal error` })
  }
})

router.get('/tasks', async (req,res) => {
  try {
    const tasks = await helpers.getTasks();
    if(tasks){
      res.status(200).json(tasks);
    } else {
      res.status(200).json({ message: 'No Tasks Found' });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: `internal error` })
  }
})

router.post('/:id/task', async (req,res) => {
  try {
    const newTask = {
      notes: req.body.notes,
      description: req.body.description,
      project_id: req.params.id
    }
    const project = await helpers.getProjects(req.params.id);
    if(!project){
      res.status(404).json(`No project with that ID`);
    }

    const result = await helpers.addTask(newTask);

    if(result){
      res.status(201).json(`Task with ID ${result} added`);
    } else {
      res.status(400).json({ message: 'Description not provided' });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: `internal error` })
  }
})

module.exports = router;