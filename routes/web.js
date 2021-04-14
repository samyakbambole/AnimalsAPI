const express = require('express');
const router = express.Router();
const animals = require('../json/animals.json');

// Routes
animals.forEach(animal => {
     router.get(`/animals/${animal.name}`, (req, res) => {
          res.render('individual', { animal: animal });
     });
});

router.get('/docs', (req, res) => {
     res.render('frontend-docs');
});

router.get('/animals/:id', (req, res) => {
     const id = req.params.id;
     res.render('individual', { animal: animals[id] });
});

module.exports = router;