const router = require('express').Router();
const users = require('../controller/user.controller')

router.route('/user')
.get(users.getUser)
.post(users.addUser)
.put(users.updateUser)
.delete(users.deleteUser)

module.exports = router;