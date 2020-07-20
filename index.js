const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');

app.get("/api/home", (req, res) => {
    res.send("hello heroku and nodejs");
})

app.listen(app.get("port"), function(){
    console.log("Node app is running on port " + app.get('port'));
});