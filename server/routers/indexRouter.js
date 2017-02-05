let service = require('../services').indexService;
let jsonFormat = require('../utils/jsonFormat');

exports = module.exports = {
    index: function( req, res, next) {
        return service.getIndexInfo().then((data) => {
            res.status(200).json(jsonFormat.formatResponseText(200, data)).end();
        }).catch((err) => {
            next(err);
        });
    }
}