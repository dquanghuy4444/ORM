const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

require("./src/database/connection");
require("./src/bootstrap")();

const PORT = 3000;

const app = express();

app.set("view engine" , "pug");

app.set("views" , path.resolve('./src/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const router =express.Router();

app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

router.use( (err , req , res , next) =>{
    if(err){
        return res.send(err.message);
    }
});

app.listen(PORT , (err) =>{
    if(err) return console.log("Cannot listen on port " + PORT);
    console.log("Server is running on " +PORT);
})







