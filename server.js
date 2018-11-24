"use strict";

const express = require('express');
const app = express();
const port = 8888;
const items = require('./routes');




app.use(express.json());
app.use(express.static("./public"));
app.use('/', items);


app.listen(port, () => console.log(`Server up and running on localhost:${port}`));



