/* eslint-disable no-unused-vars */
const express = require('express');
const service = require('./moodService');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../../utils/jwtGenerator');
const jsonParser = express.json();
const Router = express.Router();
const authorization = require('../../utils/authorization');


// Get All Moods (unprotected)

Router.get('/', jsonParser, async (req, res) => {
    try {
        const moods = await service.getAllMoods(req.app.get('db'))
         res.json(moods)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

module.exports = Router;