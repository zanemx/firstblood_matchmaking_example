const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

// const { check, validationResult } = require('express-validator/check');
// const { matchedData, sanitize } = require('express-validator/filter');
// const mongojs = require("mongojs");
// let db = mongojs("customerapp",['users']);
// let ObjectId = mongojs.ObjectId;
const mocUsers = require('./mocusers'); // from https://mockaroo.com/

let app = express();


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Set static path for assets
// app.use(express.static(path.join(__dirname,'public')));

// app.post('/user/join:id',[],(req,res,next) => {
// 	// console.log(req.params.id);
// 	return res.send("Hello Bub!");
// });

require('./routes')(app);

const port = 8081;
app.listen(port,()=>{
	console.log(`server started on port ${port}`);
});
