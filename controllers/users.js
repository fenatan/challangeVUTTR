const bcryptjs = require('bcryptjs');
const usersModel = require('../models/users');

const UsersController = {
    createUser(req,res){
        //Esses Validators podem ser colocados em um arquivo separado!
        if (!req.body.name)
            return res.status(400).send({message:'The name is required!'});
        if (!req.body.username)
            return res.status(400).send({message:'The username is required!'});
        if (!req.body.password)
            return res.status(400).send({message:'The password is required!'});

        let user = req.body;
        user.password = bcryptjs.hashSync(user.password, 10); //Criptogafando a senha
        user = new usersModel(user);
        user.save((err, data) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.status(201).send(data);
        });
    }
}

module.exports = UsersController;
