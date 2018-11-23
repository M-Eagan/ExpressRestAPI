const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query("select * from shoppingcart").then(result => {
        res.send(result.rows);
    });
});

router.post('/', (req, res) => {
    const sql = 'insert into shoppingcart product, price, quantity) values ($1::text, $2::real, $3::int)';
    const values = [req.body.name, req.body.cpcity, req.body.available];
    pool.query(sql, values).then(result => res.send(result));
});

router.get('/:id', (req, res)=> {
    pool.query(`select * from shoppingcaert where id=${req.params.id}`).then(result => {
        res.send(result.rows);
    });
});

router.delete('/:id', (req, res) => {
    pool.query(`delete from shoppingcart where id${req.params.id}`).then(result => {
        res.send(result);
    });
});

module.exports = router;