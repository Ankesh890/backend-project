const express = require('express');
const { authenticate, authorize } = require('../config-authMiddleware');
const { getUsers, updatedprofile, deleteprofile } = require ('../../community-center/backend/controllers');
const router = express.Router();

router.get('/', authenticate,authorize (['admin','member','guest']), getUsers);
router.put('/update', authenticate,authorize (['admin', 'member']), updateprofile);
router.delete('/delete', authenticate,authorize (['admin','member']), deleteprofile);

module.exports = router;