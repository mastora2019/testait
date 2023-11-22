const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.signup = (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({ username,email, password });

    newUser.save()
    .then(user => {
        res.status(201).json({ success: true, message: 'Signup successful', user });
    })
    .catch(err => {
        res.status(400).json({ success: false, message: 'Error in signup', err });
    });

};

exports.login = (req, res) => {
    const { username,email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err) return res.status(500).json({ success: false, message: 'Error in login', err });
        if (!user) return res.status(401).json({ success: false, message: 'Authentication failed. User not found.' });

        user.comparePassword(password, (err, isMatch) => {
            if (isMatch && !err) {
                const token = jwt.sign({ id: user._id }, 'keyJ', { expiresIn: '2h' });

                res.status(200).json({ success: true, message: 'Login successful', token });
            } else {
                res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
            }
        });
    });
};
