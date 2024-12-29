const { Post } = require("../models");


const creerPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const listerPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const afficherPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const modifierPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            await post.update(req.body);
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const supprimerPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            await post.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { creerPost, listerPosts, afficherPost, modifierPost, supprimerPost };