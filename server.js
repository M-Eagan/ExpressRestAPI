"use strict";

const express = require('express');
const app = express();
const port = 8888;
const items = require('./routes');




app.use(express.json());
app.use(express.static("./public"));
app.use('/', items);


app.listen(port, _ => console.log(`Server is running.`));



