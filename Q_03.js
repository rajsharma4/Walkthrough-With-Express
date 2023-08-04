/*Q.3_Create a Basic Server with Different Routes using Expresl
" `/`  → send response as {msg:`I am homepage`}
" `/about` → send response as {msg:`I am about page`}
" `/contact ` → send response as {emai::`support@pwskills.com`} */

const express = require('express');
const app = express();

app.get('/' , (req, res) => {
   res.json({msg: 'I am homePage'})
})

app.get('/about' , (req, res) => {
   res.json({msg: 'I am aboutPage'})
})

app.get('/contact' , (req, res) => {
   res.json({email: 'support@pwskills.com'})
})

const port = 3000;
app.listen(port, () => {
   console.log(`Server is Running on http://localhost:${port}`);
})