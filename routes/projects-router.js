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
      res.status(201).json(projects);
    } else {
      res.status(400).json({ message: 'Check Insertion Data' });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: `internal error` })
  }
})

module.exports = router;