var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/index.html');
});
module.exports = router;