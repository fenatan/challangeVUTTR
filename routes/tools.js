const express = require('express');
const router = express.Router();
const toolsController = require('../controllers/tools')

router.get('/', toolsController.getTools);
router.get('/:id', toolsController.getToolsByID);
router.post('/', toolsController.createTool);
router.put('/:id', toolsController.updateToolByID);
router.delete('/:id', toolsController.deleteToolByID);

module.exports = router;
