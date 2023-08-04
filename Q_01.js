/*Q.1 Bui:d a Server Using Http Module NodejS with api endpoints for Getting Products Dat9
" ‘/’ → send msg as “Welcome to Men & Women Dummy Data”
" ‘/men’ → send 10 products data of menF
" ‘/women’ → send 10 products data of wome;
" ‘/other’ → send response as page not found */

const http = require('http');

const menProducts = [
    { id: 1, name: 'shirt', price: 500 },
    { id: 2, name: 'T-Shirt', price: 300 },
    { id: 3, name: 'Polo shirt', price: 450 },
    { id: 4, name: 'Pant', price: 560 },
    { id: 5, name: 'Jeans', price: 600 },
    { id: 6, name: 'Jacket', price: 670 },
    { id: 7, name: 'Hoodie', price: 800 },
    { id: 8, name: 'Suit', price: 569 },
    { id: 9, name: 'Waist-coat', price: 990 },
    { id: 10, name: 'Coat', price: 999 }
]

const womenProducts = [
    { id: 11, name: 'Jeans', price: 950 },
    { id: 12, name: 'Dupatta', price: 300 },
    { id: 13, name: 'Plazzo', price: 850 },
    { id: 14, name: 'Kurti', price: 990 },
    { id: 15, name: 'Anarkali Suit', price: 1050 },
    { id: 16, name: 'Gown', price: 1550 },
    { id: 17, name: 'Crop Top', price: 2550 },
    { id: 18, name: 'Midi', price: 3050 },
    { id: 19, name: 'Sarar', price: 2000 },
    { id: 20, name: 'Nayra', price: 4000 }
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'Application/json');

    if (req.url === "/") {
        res.statusCode = 200;
        res.end(JSON.stringify({message: 'Welcome to Men & Women Dummy Data'}))
    } else if (req.url === '/men') {
        res.statusCode = 200;
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.statusCode = 200;
        res.end(JSON.stringify(womenProducts))
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ Error: 'Page Not found' }))
    }
})

const port = 3000;
server.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});