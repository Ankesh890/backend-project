const User = require('../../../backend-project/models/User');
const bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedpassword });
    await user.save();

    res.status(201).json({ message: 'User registered.please verify your email.'});
  };

  exports.verifyEmail = async (req, res) => {
    const {token} = req.params;
    try {
        const decoded = Jwt.verify(token,process.env.JWT_SECRET);
        await user.findByIdAndUpdate(decoded.id, { verified: true});
        res.json({message: 'Email verified successfully' });
    } catch {
        res.status(400).json({ message: 'Invalid token'});
    }
  }