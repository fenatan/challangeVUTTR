const ToolsController = {
    getTools(req, res){
        res.send(req.params);
    },

    getToolsByID(req, res){
        res.send('Get tools by ID');
    },

    createTool(req, res){
        res.send('Create tool');
    },

    updateToolByID(req, res){
        res.send('Update tool by ID');
    },

    deleteToolByID(req, res){
        res.send('Delete tool by ID');
    }
}

module.exports = ToolsController;