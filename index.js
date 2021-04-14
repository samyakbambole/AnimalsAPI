require('dotenv').config(); 

const animals = require('./json/animals.json'); 

const express = require('express'); 
const morgan = require('morgan'); 
const helmet = require('helmet'); 
const cors = require('cors'); 
const pageNotFound = require('./routes/404'); 

const app = express(); 

// Middlewares
app.use(morgan('dev')); 
app.use(helmet()); 
app.use(cors()); 
app.use(express.json()); 

app.set('view engine', 'ejs'); 

const apiRouter = require('./routes/api'); 
const webRouter = require('./routes/web'); 
app.use('/api', apiRouter); 
app.use('/', webRouter); 

// Routes
app.get('/', (req,res) => {
     res.render('index', { animals: animals }); 
}); 

const port = process.env.PORT; 
app.listen(port, () => {
     console.log(`Express API Running on port ${port}`); 
}); 