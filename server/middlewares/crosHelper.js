exports = module.exports = (req, res, next) => {
    /*
     * Can be access by another domain.
     */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "Hi1896")
    res.header("Content-Type", "application/json;charset=utf-8");

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    } else {
        return next();
    }
}