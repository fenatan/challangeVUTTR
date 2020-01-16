const express = require('express');
const router = express.Router();

const toolsController = require('../controllers/tools')
const authService = require('../services/auth');

router.get('/', authService.authorize, toolsController.getTools);
router.get('/:id', toolsController.getToolsById);
router.post('/',authService.authorize, toolsController.createTool);
router.put('/:id', toolsController.updateToolById);
router.delete('/:id', toolsController.deleteToolById);

module.exports = router;
