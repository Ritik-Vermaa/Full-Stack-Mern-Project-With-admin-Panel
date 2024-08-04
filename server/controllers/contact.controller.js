const contact = require('../models/contact.model');

exports.contactForm = async (req, res) => {
    try {
        const reponse = req.body;
        await contact.create(reponse);
        return res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}