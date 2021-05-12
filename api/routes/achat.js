const express = require('express');
const router = express.Router();
const authenticateToken = require('../jwt');
const knex = require('../database');

router.post('/item', async (req, res) => {
    const { name, cat_id, quantity } = req.params;
    try{
        let achatItem = await knex('achats').insert({name, cat_id, quantity});
        res.status(200).send(achatItem);
    } catch(e){
        res.status(401).send();
    }
});

module.exports = router;