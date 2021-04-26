const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Fuck yo chicken strips, this is a test biiiiiiiiitch'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
