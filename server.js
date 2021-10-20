const express = require('express');
const path = require('path');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/',apiRoutes);
app.use(htmlRoutes);

app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, './public/index.html')));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});