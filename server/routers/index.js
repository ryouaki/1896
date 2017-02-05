let express = require('express');
let router = express.Router();

let defaultRouter = require('./defaultRouter');

let indexRouter = require('./indexRouter');

let routerMap = [
   {method: "get", path: "/index",functions: indexRouter.index},
];

routerMap.forEach(function(route) {
    let functions = route.functions;
    if (functions instanceof Function || (functions instanceof Array&&functions.length > 0)) {
        router[route.method](route.path, route.functions);
    } else {
        throw Error(`Invalid functions [${route.path}], The value of functions in routerMap mush be type of Function or Array!`);
    }
});

router.use(defaultRouter.error404Func);
router.use(defaultRouter.error500Func);

exports = module.exports = router;