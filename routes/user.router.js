const router = require('express').Router();
const users = require('../controller/user.controller')

router.route('/user')
.get(users.getUser)
.post(users.addUser)
.post(users.updateUser)

module.exports = router;