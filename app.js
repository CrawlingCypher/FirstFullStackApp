const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const homeRoutes = require('./routes/home');
const storiesRoutes = require('./routes/stories');


//link the env to the DB
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'});

//connect to DB
connectDB()

//Environment setting
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); //any file you put in the public folder will be served with no routing
app.use(methodOverride('_method'));

//Routing
app.use('/', homeRoutes);
app.use('/stories', storiesRoutes);



app.listen(process.env.PORT, () => {
    console.log('hosting on http://localhost:2121/');
})