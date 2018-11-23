"use strict";

const express = require('express');
const pool = require('./db');
const router = express.Router();

router.get('/items', (req, res) => {
    pool.query("select * from shoppingcart").then((result) => {
        res.json(result.rows);
    });
});

router.post('/items', (req, res) => {
    const sql = 'insert into shoppingcart product, price, quantity) values ($1::text, $2::real, $3::int)';
    const values = [req.body.product, req.body.price, req.body.quantity];
    pool.query(sql, values).then(result => res.json(result));
});

router.put('/items:id', (req, res)=> {
    pool.query("update items set product=$1::text, price=$2::real, $3::int", [req.body.product, req.body.price, req.body.quantity]).then(()=> {
    pool.query(`select * from shoppingcart where id=${req.params.id}`).then((result) => {
        res.json(result.rows);
    });
});
});

router.delete('/items:id', (req, res) => {
    pool.query(`delete from shoppingcart where id${req.params.id}`).then((result) => {
        res.json(result.rows);
    });
});


module.exports = router;