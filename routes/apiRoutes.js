const api = require('express').Router();
const fs = require("fs");
const uniqid = require('uniqid');

api.get('/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(data);
});

api.post('/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db/db.json'));
    req.body.id = uniqid();
    data.push(req.body);
    fs.writeFileSync('./db/db.json',JSON.stringify(data,null,4));
    res.json({message: 'data recived'});

});

api.delete('/notes/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db/db.json'));
    const newData = data.filter(note => note.id != req.params.id);
    fs.writeFileSync('./db/db.json',JSON.stringify(newData,null,4));
    res.json(newData)

});

module.exports = api;