const express = require('express');
const service = require('./activitiesService');

const jsonParser = express.json();
const Router = express.Router();
const authorization = require('../../utils/authorization');


// Get All Activities (unprotected)

Router.get('/', jsonParser, async (req, res) => {
    try {
        const activities = await service.getAllActivities(req.app.get('db'))
         res.json(activities)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

module.exports = Router;