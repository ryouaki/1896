let jsonFormat = require('../utils/jsonFormat');

exports = module.exports = {
    error404Func: function (req, res, next) {
        return res.status(404).json(jsonFormat.formatResponseText(404, "Not Found")).end();
    },
    error500Func: function (err, req, res, next) {
        return res.status(500).json(jsonFormat.formatResponseText(500, err)).end();
    }
}