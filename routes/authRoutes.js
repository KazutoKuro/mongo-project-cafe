const {Router} = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/account', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/account', authController.login_get);
router.post('/login', authController.login_post);

module.exports = router;