const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validate.middleware');
const {signupSchema ,loginSchema } = require('../validators/auth.validator');



router.route('/').get(authController.home);
router.route('/register').post(validate(signupSchema), authController.register);
router.route('/login').post(validate(loginSchema),authController.login);

// router.get('/', (req, res) => {
//     res.status(200).send('Hello World');
// });


// router.route('/')
//     .get((req, res) => {
//         res.status(200).send('Hello World');
//     });

module.exports = router;