const bcryptjs = require('bcryptjs');

const usersModel = require('../models/users');
const authService = require('../services/auth');

const LoginController = {
    login(req, res) {
        usersModel.findOne({ username: req.body.username }, async (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Falha ao realziar login' });
            } else {
                if (data) {
                    const valid = bcryptjs.compareSync(req.body.password, data.password)
                    if (valid) {
                        const token = await authService.generateToken({ id: data._id, username: data.username });
                        return res.status(200).send({ token });
                    }
                }
                return res.status(400).send({ message: 'Usuário e/ou senha inválidos' })
            }
        });
    }
}

module.exports = LoginController;
