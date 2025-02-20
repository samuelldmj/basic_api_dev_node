const express = require('express');
const {  router } = require('./routes/post');
const morgan = require('morgan');
const app = express();


//middleware
app.use(morgan('dev'));

app.use('/', router );

const port = 5500;
app.listen(port, () => { console.log(`A nodeJS Server is listening on port: ${port}`)});