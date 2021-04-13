# AnimalsAPI

An API For Getting all Animals' Information!

## Start

### `npm start`

Starts the production Server 
Starts The Server on - http://localhost:5000/

### `npm run dev` 

Starts the Development Server
Starts the Server on - http://localhost:5000/

## Frontend Routes

#### `/` 

Frontend HTML page for viewing all the information of the animals as cards. 

#### `/:id`

Returns the Information about a particular Animal According to its `id`.

#### `/:nameOfAnimal`

An Individual Frontend Route for every Animal. 

## API Routes

#### `/api/docs`

Documentation for the API. 

#### `/api/animals`

Returns the Information about the Animals in JSON Format.

#### `/api/animals/:id`

Returns the Information about a particular Animal According to its `id` in JSON.

#### `/api/animals/:nameOfAnimal`

Returns the Information about a particular Animal According to its `name` in JSON.

## Tools & Utilities Used

* [dotenv](https://www.npmjs.com/package/dotenv)
     * Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

* [cors](https://www.npmjs.com/package/cors)
     * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

* [ejs](https://www.npmjs.com/package/ejs)

* [express](https://www.npmjs.com/package/express)
     * Fast, unopinionated, minimalist web framework for node.

* [helmet](https://www.npmjs.com/package/helmet)
     * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

* [morgan](https://www.npmjs.com/package/morgan)
     * HTTP request logger middleware for node.js

* [nodemon](https://www.npmjs.com/package/nodemon)
     * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

* [bootstrap](https://getbootstrap.com/)
     * Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

© [samyakbambole](https://github.com/samyakbambole)

Make Sure to Give This Repo a Star!