const User = require('../models/user');
const bcrypt = require('bcrypt');

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

exports.activateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({where: {id: id}});
        if (user) {
            user.active = true;
            await user.save();
            return res.status(200).json(
                {message: `User (${user.username}) activated successfully`}
            );
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
         return res.status(500).send(error.message);
    }
};

exports.deactivateUser = async (req, res) => { //*
    try {
        const { id } = req.params;
        const user = await User.findOne({where: {id: id}});
        if (user) {
            user.active = false; //*
            await user.save();
            return res.status(200).json(
                {message: `User (${user.username}) deactivated successfully`} //*
            );
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
         return res.status(500).send(error.message);
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.findOne({ where: {id: id}});
        if (user) {
            user.password = hashedPassword;
            await user.save();
            return res.status(200).json(
                { message: 'Password update successfully'}
            );
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
       return res.status(500).send(error.message);  
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, loginuser } = req.body;
        const user = await User.findOne({ where: {id: id}});
        if (user) {
            user.username = username;
            user.loginuser = loginuser;
            await user.save();
            return res.status(200).json(
                { message: 'User updated successfully'}
            );
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
       return res.status(500).send(error.message);  
    }
};