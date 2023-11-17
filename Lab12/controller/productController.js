const fs = require('fs');
const path = require('path');

exports.addProduct = (req, res, next) => {
    let productList = [];
    if (fs.existsSync(path.join(__dirname, '..', 'data', 'product.json'))) {
        const oldProductList = fs.readFileSync(path.join(__dirname, '..', 'data', 'product.json'), { encoding: 'utf8' });
        if (oldProductList) {
            productList = JSON.parse(oldProductList);
        }
    }
    productList.push(req.body);
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'product.json'), JSON.stringify(productList), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.createReadStream(path.join(__dirname, '..', 'view', 'product', 'saved.html')).pipe(res);
};

exports.listProduct = (req, res, next) => {
    let html = fs.readFileSync(path.join(__dirname, '..', 'view', 'product', 'list.html'), 'utf-8');
    if (fs.existsSync(path.join(__dirname, '..', 'data', 'product.json'))) {
        const productList = fs.readFileSync(path.join(__dirname, '..', 'data', 'product.json'), { encoding: 'utf8', create: true });
        if (productList) {
            html = html.replace('{Data}', productList);
        }
    }
    res.send(html);
}

exports.getAddPage = (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'view','product', 'add.html')).pipe(res);
}