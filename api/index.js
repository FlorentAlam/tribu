const express = require('express');
const app = express();
const server = require('http').createServer(app);

const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const session = require('express-session');

const achatRouter = require('./routes/achat');

dotenv.config();

app.use(cors({
    origin: ['http://localhost:4200', 'http://192.168.1.16:4200'],
    credentials: false
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.use(session({
    secret : 's3Cur3',
    name : 'sessionname',
    resave: false,
    saveUninitialized: true
   })
 );

app.use('/api/achat', achatRouter);

server.listen(4201, () => {
    console.log("app launched on port 4201");
});

module.exports = io;