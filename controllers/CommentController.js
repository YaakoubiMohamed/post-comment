


const CreerComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const ModifierComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (comment) {
            await comment.update(req.body);
            res.status(200).json(comment);
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const SupprimerComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (comment) {
            await comment.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { CreerComment, ModifierComment, SupprimerComment };