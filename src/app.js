const express = require('express');
const {  router } = require('./routes/route');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
dotenv.config();


//db connection
mongoose.connect(process.env.MONGO_URI).then( () => console.log('Db Connected!!'));

mongoose.connection.on('error', err => console.log(`Db Connection error: ${err.message}`));


//middleware  
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', router );

const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`A nodeJS Server is listening on port: ${port}`)}); 