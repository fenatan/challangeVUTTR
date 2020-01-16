const express = require('express');
const router = express.Router();

const toolsController = require('../controllers/tools')
const authService = require('../services/auth');

router.get('/', authService.authorize, toolsController.getTools);
router.get('/:id', authService.authorize, toolsController.getToolsById);
router.post('/', authService.authorize, toolsController.createTool);
router.put('/:id', authService.authorize, toolsController.updateToolById);
router.delete('/:id', authService.authorize, toolsController.deleteToolById);

module.exports = router;
