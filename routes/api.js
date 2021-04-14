const express = require('express'); 
const router = express.Router(); 
const animals = require('../json/animals.json'); 

// Routes
router.get('/', (req,res) => {
     res.redirect('/api/docs'); 
}); 

router.get('/animals', (req,res) => {
     res.json(animals); 
}); 

animals.forEach(animal => {
     router.get(`/animals/${animal.name}`, (req,res) => {
          res.json(animal); 
     }); 
}); 

router.get('/docs', (req,res) => {
     res.render('api-docs'); 
}); 

router.get('/animals/:id', (req,res) => {
     res.json(animals[req.params.id]); 
});

module.exports = router;