const express = require('express'); 
const router = express.Router(); 
const animals = require('../json/animals.json'); 

// Routes
animals.forEach(animal => {
     router.get(`/${animal.name}`, (req,res) => {
          res.render('individual', {animal: animal}); 
     }); 
}); 

module.exports = router;