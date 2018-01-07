const cors = require('cors');
const bodyParser = require('body-parser');
const jade = require('jade');
const twitter = require('./routes/twitter');
const users = require('./routes/users');

const db = 'mongodb://Jonny:Test123@ds127506.mlab.com:27506/thechampusers';
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(db, {useMongoClient: true})
.then(() => {
  console.log('successfully connected to', db)
}).catch(err => console.log('connection failed', err));

const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
app.use(cors());
app.options('*', cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.send('Express - root')
})

app.get('/tweet',function(req,res){
    res.send('Express - tweet')
})

app.use('/twitter',cors(), twitter);
app.use('/users',cors(), users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
