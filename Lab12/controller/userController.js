const fs = require('fs');
const path = require('path');

exports.addUser = (req, res, next) => {
    let userList = [];
    if (fs.existsSync(path.join(__dirname, '..', 'data', 'user.json'))) {
        const oldUserList = fs.readFileSync(path.join(__dirname, '..', 'data', 'user.json'), { encoding: 'utf8' });
        if (oldUserList) {
            userList = JSON.parse(oldUserList);
        }
    }
    userList.push(req.body);
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'user.json'), JSON.stringify(userList), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.createReadStream(path.join(__dirname, '..', 'view', 'user', 'saved.html')).pipe(res);
};

exports.listUser = (req, res, next) => {
    let html = fs.readFileSync(path.join(__dirname, '..', 'view', 'user', 'list.html'), 'utf-8');
    if (fs.existsSync(path.join(__dirname, '..', 'data', 'user.json'))) {
        const userList = fs.readFileSync(path.join(__dirname, '..', 'data', 'user.json'), { encoding: 'utf8', create: true });
        if (userList) {
            html = html.replace('{Data}', userList);
        }
    }
    res.send(html);
}

exports.getAddPage = (req, res, next) => {
    fs.createReadStream(path.join(__dirname, '..', 'view','user', 'add.html')).pipe(res);
}