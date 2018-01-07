const express = require('express');
const router = express.Router();
const {postNewUser, loginUser, getAllUsers} = require('../controllers/usersControllers')

router.post('/register', postNewUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

module.exports = router;
