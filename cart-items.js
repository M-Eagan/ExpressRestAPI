const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send([{"id": "1",
	"product": "jacket",
	"price": "$5",
	"quantity": "3"}]);
});

router.post('/', (req, res) => {
    if(req.body) {
    res.status(201).send(req.body);  
    } else {
        res.sendStatus(400);
    }
    
});

router.put('/:id', (req, res) => {
    res.send(`${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`${req.params.id}`);
});

module.exports = router;