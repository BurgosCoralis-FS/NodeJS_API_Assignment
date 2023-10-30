const express = require("express");
const nameRouter = express.Router();
const { nameService, nameServiceByName } = require("../services/nameService");

nameRouter.get("/", (req, res, next) => {
    nameService().then(result => {
        res.status(200).json(result.data);
    }).catch(err => {
        res.status(500).json({
            error: {
                message: error.message,
            }
        })
    })
})

nameRouter.get('/:name', (req, res, next) => {
    nameServiceByName(req.params.name).then(result => {
        res.status(200).json(result.data)
    }).catch(err => {
        res.status(500).json({
            error:{
                message: error.message
            }
        })
    })
})

module.exports = nameRouter;