let express = require('express');
let app = express();

app.use(express.static(__dirname + "/web"));
app.use(express.static('dist/angular-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-front'}),

);

module.exports = app;