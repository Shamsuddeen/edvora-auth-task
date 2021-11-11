const express = require('express');
const {
    register,
    login,
    logout,
    updatePassword
} = require('../Controller/auth');

const router = express.Router();

const {
    protect
} = require('../Middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.put('/updatepassword', protect, updatePassword);

module.exports = router;