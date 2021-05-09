const app = require('express')();

app.get('/', (req, res) => {
    res.send("ok");
});

app.listen(4201, (req, res) => {
    console.log('server listening on port 4201');
});