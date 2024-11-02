const { Router } = require('express');
const { login, signIn} = require('../controllers/user-controller')
const router = Router();


router.get('/login', login)
router.post('/signin', signIn)

module.exports = router