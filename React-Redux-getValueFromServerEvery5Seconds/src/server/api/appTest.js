const express = require('express');
const router = express.Router();

router.get('/getData', (req, res) => {
    res.json({data: "server return time: " + new Date()})
});

module.exports = router;