import express from 'express'; 
const router = express.Router(); 
import urls from './redirectUrl.js'; 
import animals from '../../json/animals.js'; 

// Routes
urls.forEach(url => {
     router.get(`/${url.short}`, (req,res) => {
          res.redirect(`/${url.original}`); 
     }); 
}); 

animals.forEach(animal => {
     router.get(`/${animal.name}`, (req,res) => {
          res.redirect(`/animals/${animal.name}`);     
     }); 
}); 

export default router; 