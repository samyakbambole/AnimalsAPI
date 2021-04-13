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

module.exports = router