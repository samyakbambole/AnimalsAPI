import express from 'express'; 
const router = express.Router();
import animals from '../json/animals.js'

// Routes
router.get('/animals', (req,res) => {
     res.redirect('/'); 
}); 

router.get('/animals/list', (req,res) => {
     res.render('list', { animals: animals }); 
}); 

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

export default router; 