let express = require('express');
let handlebars = require('express-handlebars').create;
let catalogControlers = require('./controllers/catalogControlers');
let app = express();


app.engine('.hbs',handlebars({
    extname: '.hbs',
}).engine);
app.set('view.engine', '.hbs');
app.get('/', (req, res) => {
    res.send(`<h1>Home Page </h1>
    <a href="/catalog">Catalog </a>
    <p>Welcome to our site!`)
});
app.get('/catalog', catalogControlers.catalog);
app.get(`/catalog/:productID`, catalogControlers.details);

app.listen(3000, () => console.log('Server listening on port 3000...'));

