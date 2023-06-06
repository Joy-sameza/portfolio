const express = require('express');
const router = express.Router();
const { reviewModel } = require("../models/reviewModels");


router.post('/new-review', (req, res, next) => {
    console.log(req.body);
    res.end("done");
    next();
});

module.exports = router;