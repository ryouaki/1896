let path = require('path');
let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

global.rootDir = path.join(__dirname, '..');

let logger = require('./middlewares').logger;
let routers = require('./routers');

let app = express();

app.use(logger);
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routers);

app.listen(process.env.PORT || 3000);