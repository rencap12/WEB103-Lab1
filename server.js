const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.send('hello world');
})

app.get('/products', function (req, res) {
    res.send('here are the products');
})

app.get('/products/:product_id', function(req, res) {
    res.send(`product id: ${req.params.product_id}`);
})

app.get('*', function(req, res) {
    res.status(404).send("not found");
})

app.listen(3000, function() {
    console.log('server started on port 3000');
})