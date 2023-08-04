/*Q.4 Build a Server that Generate! Random Number U!ing Epre!
 ‘/random’ → !end random number in re!pon!e {random:10} */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let randomNum = Math.floor(Math.random() * 100 ) + 1
res.json({RandomNum: randomNum})
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
})