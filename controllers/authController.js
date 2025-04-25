const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const { loginuser, password } = req.body;
        const user = await User.findOne(
            { where: { loginuser, active: true} }
        );
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {id: user.id, username: user.username, loginuser: user.login},
                process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'}
            );
            res.json({token});
        } else {
            res.status(401).send('Invalid credentials')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.register = async (req, res) =>{
    try {
        const { loginuser, username, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create(
            { username, loginuser, password: hashPassword, active: true }
        );
        res.status(201).json({ message: 'User created successfully', user});
    } catch (error) {
        res.status(500).send(error.message)
    }
};