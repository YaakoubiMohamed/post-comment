const { Sequelize } = require("sequelize");
const {sequelize} = require("../config/db");



const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contenu: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Post;