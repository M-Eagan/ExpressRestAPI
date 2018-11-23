const express = require('express');
const cartItems = require('./public/cart-items');
const app = express();
const port = 8888;




app.use(express.json());
app.use(express.static("./public"));
app.use('/cartItems', cartItems);
// app.use('/shoppingCart', shoppingCart);


app.listen(port, () => console.log(`Server up and running on localhost:${port}`));



