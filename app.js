const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://kurosz:asd123@nodetuts.hhvdf.mongodb.net/project-cafe';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/account', (req, res) => res.render('account'));
app.get('/menulistcafe', requireAuth, (req, res) => res.render('menulistcafe'));
app.get('/menulistjuices', requireAuth, (req, res) => res.render('menulistjuices'));
app.use(authRoutes);
