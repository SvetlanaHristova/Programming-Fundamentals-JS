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
        let nameOfProduct=data
        res.render(`product.hbs`,{details: data});
    },
};