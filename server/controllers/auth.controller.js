const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const home = async (req, res) => {
    try {
        res.status(200).json('Hello World');
    }
    catch (err) {
        res.status(500).send(err);
    }
}

//Register the user
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json('User already exist');
        }

        // Create a new user
        const user = await User.create({
            username,
            email,
            phone,
            password
        });

        res.status(201).json({
            msg: 'User registered successfully',
            token: await user.generateToken(),
            id: user._id.toString()
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
}

//Login the user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await userExist.compressPassword(password);

        if (isPasswordValid) {
            res.status(200).json({
                msg: 'User login successful',
                token: await userExist.generateToken(),
                id: userExist._id.toString()
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { home, register , login };