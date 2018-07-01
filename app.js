const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const mongojs = require("mongojs");
let db = mongojs("customerapp",['users']);
let ObjectId = mongojs.ObjectId;

let app = express();

const port = 8081;

// View engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use((req,res,next)=>{
	res.locals.errors = null;
	next();
});

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set static path for assets
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.get('/',(req,res)=>{

	db.users.find((err,docs) => {
		// array of users
		// console.log(docs);
		res.render('index',{
			users:docs
		});
	});
});

app.post('/users/add',[

	// validators
	check("first_name").exists().isLength({ min: 1 }).trim().withMessage("first name doesn't exists"),
	check("last_name").exists().isLength({ min: 1 }).trim().withMessage("last name doesn't exists"),
	check("email").isEmail().withMessage("Requires valid email.").trim().normalizeEmail()

],(req,res,next)=>{
	// console.log('\033[2J'); // clear console
	// console.log(req.body);

	const errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(422).json({errors:errors.mapped()});
	}

	let newUser = {
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email
	};

	// add user to db
	db.users.insert(newUser,(err,doc) => {
		if(err){
			console.log(err);
			return res.send(err);
		}
		res.redirect("/");
	});
});

app.delete('/users/delete/:id',(req,res,next) => {
	// console.log(req.params.id);

	db.users.remove({
		_id:ObjectId(req.params.id),

	},(err) => {
		if(err){
			return res.status(400).send(err);
		}

		console.log("deleted user: " + req.params.id);
		return res.status(200).send("success");

	});
});

app.listen(port,()=>{
	console.log(`server started on port ${port}`);
});
