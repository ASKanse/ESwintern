const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const lendingRouter = require('./api/routes/lending');
const borrowingRouter = require('./api/routes/borrowing');

mongoose.connect('mongodb://equipsmas:equipsmas@es-equipsmaster-shard-00-00-jjqzv.mongodb.net:27017,es-equipsmaster-shard-00-01-jjqzv.mongodb.net:27017,es-equipsmaster-shard-00-02-jjqzv.mongodb.net:27017/test?ssl=true&replicaSet=ES-equipsmaster-shard-0&authSource=admin&retryWrites=true',{ useNewUrlParser: true });
mongoose.Promise =  global.Promise;

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text()); //https://stackoverflow.com/questions/12345166/how-to-force-parse-request-body-as-plain-text-instead-of-json-in-express

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

console.log('entering routes');
app.use('/user/rentals/lending',lendingRouter);
app.use('/user/rentals/borrowing',borrowingRouter);
console.log('out of routes');

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
