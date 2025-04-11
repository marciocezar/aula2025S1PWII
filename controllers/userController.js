const User = require('../models/user');
exports.listUsersGet = async (req, res) => {
    try {
        const users = await User.findAll(
            { attributes: ['id', 'username', 'loginuser', 'active'] }
        );
        if (users.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(users);
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};

exports.listUserGet = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne(
            {attributes: ['id', 'username', 'loginuser', 'active'],
             where: {id: id}}
        );
        if (user === null) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(424).send(error.message)
    }
};

/// Proximo:  
/// 1-Login dos usuários
/// 2-Deletar os usuários
/// 3-Inserir os usuários
/// 4-Atualizar os usuários