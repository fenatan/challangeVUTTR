const jwt = require('jsonwebtoken');
const secret = 'QCNh@V4Z3VydW1lZA==';

module.exports = {

    generateToken(data) {
        return jwt.sign(data, secret, { expiresIn: '1h' });
    },

    authorize(req, res, next) {
        const token = req.body.token || req.query.token || req.headers['token'];

        if (!token) {
            res.status(401).json({ message: 'Acesso Restrito' });
        } else {
            jwt.verify(token, secret, (error, decoded) => {
                if (error) {
                    res.status(401).json({
                        message: 'Token Inválido'
                    });
                } else {
                    req.userId = decoded.id;
                    next();
                }
            });
        }
    }
}

