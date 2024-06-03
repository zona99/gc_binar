var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('petugas/index', { title: 'Sistem Informasi Keamanan dan Ketertiban Masyarakat Malinau' });
});

module.exports = router;