let express = require('express');

let app = express();

let data = {
    '0001': 'Oil filter',
    '0002': 'Windshiel wiper',
    '0003': 'Xenon headlght',
    '0057': 'Spoiler'
}

app.get('/', (req, res) => {
    res.send(`<h1>Home Page </h1>
    <a href="/catalog">Catalog </a>
    <p>Welcome to our site!`)
});
app.get('/catalog', (req, res) => {
    res.send(`<h1> Catalog </h1>
    <a href="/">Home </a>
    <p> Lisr of product </p>
        <ul>
        ${Object.entries(data).map(e => `<li><a href="/catalog/${e[0]}">"${e[1]}"</a ></li >`).join('')}
        </ul>`)
});
app.get(`/catalog/:productID`, (req, res) => {
    let product = data[req.params.productID];
    res.send(`<h1> Product Details </h1>
<a href ="/catalog" > Back to Catalog </a>
<p> Information about product</p><p>${product}</p>`);
});

app.listen(3000);


