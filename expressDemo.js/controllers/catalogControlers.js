let data = [
    {
        id: '0001',
        name:'Oil filter'
    },
    {
        id: '0002',
        name:'Windshiel wiper'
    },
    {
        id: '0003',
        name:'Xenon headlght'
    },
    {
        id: '0057',
        name: 'Spoiler'
    }
];
module.exports = {
    catalog: (req, res) => {
        res.render('catalog.hbs',{product: data})
    },

    details: (req, res) => {
        let product = data[req.params.productID];
        res.send(`<h1> Product Details </h1>
    <a href ="/catalog" > Back to Catalog </a>
    <p> Information about product</p><p>${product}</p>`);
    },
};