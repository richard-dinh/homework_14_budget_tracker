const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv')

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('compression')())

app.use(express.static("public"));

// routes
app.use(require("./routes"));

require('./config')
.then( () => app.listen(3000))
.catch( error => console.error(error))
