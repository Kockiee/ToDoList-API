const validateBodyTitle  = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined) {
        res.status(400).json({ message: "The field \"title\" is required"})
    }
    if (body.title == "") {
        res.status(400).json({ message: "The title cannot be empty"})
    }

    next();
};

const validateBodyStatus = (req, res, next) => {
    const { body } = req;

    if (body.status = undefined) {
        res.status(400).json({message: "The field \"status\" is required"})        
    }
    if (body.status = "") {
        res.status(400).json({message: "The Status cannot be empty"})
    }

    next()
}

module.exports = {
    validateBodyTitle,
    validateBodyStatus
};