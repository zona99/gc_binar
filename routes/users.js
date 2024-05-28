var express = require('express');
var router = express.Router();
const userController = require('../app/controller/userController');

/* GET users listing. */
router.get('/', userController.getAllUser);
router.post('/', userController.addUser);

module.exports = router;