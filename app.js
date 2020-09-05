const express = require('express');
const app = express();


app.listen(3000, () =>{
    console.log('worgin ');
});

app.get('/', (req, res) =>{
    res.send("welcome home page");
})