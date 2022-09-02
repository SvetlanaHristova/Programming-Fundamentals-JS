let express = require('express');

let app = express();
app.get('/',hendler);
app.listen(3000);

function hendler(req,res) {
    res.write('Hello World');
    res.end();
}