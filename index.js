require('dotenv').config(); 

const animals = require('./json/animals.json'); 

const express = require('express'); 
const morgan = require('morgan'); 
const helmet = require('helmet'); 
const cors = require('cors'); 

const app = express(); 

// Middlewares
app.use(morgan('dev')); 
app.use(helmet()); 
app.use(cors()); 
app.use(express.json()); 

app.set('view engine', 'ejs'); 

// Routes
app.get('/', (req,res) => {
     res.render('index', { animals: animals }); 
}); 

app.get('/animals', (req,res) => {
     res.json(animals); 
}); 

app.get('/animals/:id', (req,res) => {
     res.json(animals[req.params.id]); 
});

const port = process.env.PORT; 
app.listen(port, () => {
     console.log(`Express API Running on port ${port}`); 
}); 