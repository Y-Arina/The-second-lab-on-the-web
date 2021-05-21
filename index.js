const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const express = require('express');
const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Example app listening at http://localhost:3002/users`);
    console.log('Welcome!');
});