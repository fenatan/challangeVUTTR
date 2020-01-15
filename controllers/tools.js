const toolModel = require('../models/tools');

const ToolsController = {
    getTools(req, res) {
        const query = req.query.tag ? { tags: req.query.tag } : {};

        toolModel.find(query, (err, data) => {
            if (err) {
                return res.status(500).json({ msg: 'Falha ao buscar ferramentas', err });
            } else if (data.length) {
                return res.status(200).send(data);
            } else {
                res.status(404).send([]);
            }
        });
    },

    getToolsById(req, res) {
        toolModel.findById(req.params.id, (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Falha ao buscar ferramenta', err });
            } else if (data) {
                return res.status(200).send(data);
            } else {
                res.status(404).send({ message: 'Ferramenta não encontrada' });
            }
        });
    },

    createTool(req, res) {
        const tool = new toolModel(req.body);
        tool.save((err, data) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.status(201).send(data);
        });
    },

    updateToolById(req, res) {
        delete req.body._id;
        toolModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao atualizar ferramenta' });
            }
            res.status(200).send(data);
        });
    },

    deleteToolById(req, res) {
        toolModel.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) {
                return res.status(500).send({ message: 'Houve um problema ao deletar a ferramenta!' });
            } else if (data) {
                return res.status(204).send();
            } else {
                res.status(404).send({ message: 'O ID informado não existe' });
            }
        });
    }
}

module.exports = ToolsController;