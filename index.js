import dotenv from 'dotenv'; 
dotenv.config(); 

import animals from './json/animals.js';

import express from 'express'; 
import morgan from 'morgan'; 
import helmet from 'helmet'; 
import cors from 'cors'; 

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

import apiRouter from './routes/api.js';
import webRouter from './routes/web.js';
import redirectRouter from './routes/redirect/redirect.js';
import contributorsRouter from './routes/contributors.js'; 
app.use('/api', apiRouter);
app.use('/', webRouter);
app.use('/', redirectRouter); 
app.use('/contributors', contributorsRouter); 

// Routes
app.get('/', (req, res) => {
     res.render('index', { animals: animals });
});

const port = process.env.PORT;
app.listen(port, () => {
     console.log(`Express API Running on port ${port}`);
}); 