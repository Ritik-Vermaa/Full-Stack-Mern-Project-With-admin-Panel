const mongoose = require('mongoose');
const { makeIssue } = require('zod');

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minlength: [3, 'Username is too short'],
        maxlength: [32, 'Username is too long'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        lowercase: true,
    },
   message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        minlength: [20, 'Message is too short'],
        maxlength: [2000, 'Message is too long'],
    },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;   