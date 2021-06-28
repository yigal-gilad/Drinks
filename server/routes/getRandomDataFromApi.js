const express = require('express');
const app = express();
const router = express.Router();
const fetch = require('node-fetch');
const env = require('../readenv');

// get service stations list from rav-kav api and send it back to the client
router.get('/getrandomdata', (req, res) => {
    fetch(env.random_data_url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'GET',
            mode: 'no-cors'
        })
        .then(response => response.json().then(data => {
            return res.status(200).send(data);
        }))
});

module.exports = router;