var express = require('express');
var router = express.Router();
const userController = require('../app/controller/userController');
const checkUser = require('../app/middleware/middlewareUser');

/* GET users listing. */
router.get('/', userController.getAllUser);
router.post('/create', checkUser.checkIsUser,userController.addUser);

module.exports = router;