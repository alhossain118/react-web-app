
const PORT  = 5005;
var express = require('express');

//Create our app
var app = express();

app.use(express.static('./public'));
app.listen(PORT, () => {
    console.log(`Express listening on PORT ${PORT}`)
})