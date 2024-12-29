const { User } = require("../models");




const creerUtilisateur = async (req, res) => {
    
    try {
        const utilisateur = await User.create(req.body);
        res.status(201).json(utilisateur);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { creerUtilisateur };