const express = require('express');
const router = express.Router();
const toolsController = require('../controllers/tools')

router.get('/', toolsController.getTools);
router.get('/:id', toolsController.getToolsById);
router.post('/', toolsController.createTool);
router.put('/:id', toolsController.updateToolById);
router.delete('/:id', toolsController.deleteToolById);

module.exports = router;
