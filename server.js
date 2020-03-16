require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const {join} = require('path')
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("compression")())

app.use(express.static(join(__dirname, 'public')));

// routes
app.use(require("./routes"));

require('./config')
.then( () => app.listen(process.env.PORT || 3000))
.catch( error => console.error(error))
