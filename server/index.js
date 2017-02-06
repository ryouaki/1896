let path = require('path');
let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
var compression = require('compression');

global.rootDir = path.join(__dirname, '..');

let logger = require('./middlewares').logger;
let cros = require('./middlewares').cros;
let routers = require('./routers');

let app = express();

app.use(compression());
app.use('/api', methodOverride('_method'));
app.use('/api', logger);
app.use('/api', cros);
app.use('/api', cookieParser());
app.use('/api', bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routers);

app.listen(process.env.PORT || 3000);