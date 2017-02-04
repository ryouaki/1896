exports = module.exports = {
    error404Func: function (req, res, next) {
        return res.status(404).json({ success: false, message: "" }).end();
    },
    error500Func: function (err, req, res, next) {
        return res.status(500).json({ success: false, message: "" }).end();
    }
}