const express = require('express'); 
const router = express.Router(); 
const animals = require('../json/animals.json'); 

// Routes
router.get('/animals', (req,res) => {
     res.json(animals); 
}); 

router.get('/animals/:id', (req,res) => {
     res.json(animals[req.params.id]); 
});

animals.forEach(animal => {
     router.get(`/${animal.name}`, (req,res) => {
          res.json(animal); 
     }); 
}); 

router.get('/docs', (req,res) => {
     res.render('api-docs'); 
}); 

module.exports = router;