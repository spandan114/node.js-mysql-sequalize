const router = require('express').Router();
const users = require('../controller/user.controller')

router.route('/user')
.get(users.getUser)
.post(users.addUser)
.put(users.updateUser)
.delete(users.deleteUser)

router.route('/add-post').get(users.addPost)

router.route('/raw-query').get(users.rawQuery)

router.route('/one-to-one').get(users.OnetoOne)
router.route('/belong-to').get(users.BelongTo)
router.route('/one-to-many').get(users.OnetoMany)
router.route('/many-to-many').get(users.ManytoMany)

module.exports = router;