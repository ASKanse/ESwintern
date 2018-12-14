const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const adminequipRouter = require('./api/routes/equipments');
const userequipRouter = require('./api/routes/userequips');

mongoose.connect('mongodb://equipsmas:equipsmas@es-equipsmaster-shard-00-00-jjqzv.mongodb.net:27017,es-equipsmaster-shard-00-01-jjqzv.mongodb.net:27017,es-equipsmaster-shard-00-02-jjqzv.mongodb.net:27017/test?ssl=true&replicaSet=ES-equipsmaster-shard-0&authSource=admin&retryWrites=true',{ useNewUrlParser: true });
mongoose.Promise =  global.Promise;

app = express();

app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.use('/admin/equipments',adminequipRouter);
app.use('/user/equipments',userequipRouter);

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
