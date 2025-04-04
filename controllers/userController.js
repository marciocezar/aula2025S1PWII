const User = require('../models/user');

exports.listUsersGet = async (req, res) => {
    try {
        const result = "List Users OK.";
        return res.status(200).json({ message: result });
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};
exports.listUserGet = async (req, res) => {
    try {
        const { id } = req.params;
        const result = `Usuário ID: ${id}.`;
        return res.status(200).json({ message: result });
    } catch (error) {
        const message = "A solicitação falhou: "
        res.status(424).send(message + error.message)
    }
};