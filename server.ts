// load .env data into process.env
import * as dotenv from 'dotenv';
dotenv.config();

// Web server config
import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 3001;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.json({msg: 'API Home'})
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});